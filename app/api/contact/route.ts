import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3; // Max 3 requests per hour per IP

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

// Input validation and sanitization
function validateInput(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate name
  if (!data.name || typeof data.name !== "string") {
    errors.push("Name is required");
  } else if (data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  } else if (data.name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required");
  } else if (!emailRegex.test(data.email)) {
    errors.push("Invalid email address");
  } else if (data.email.length > 254) {
    errors.push("Email must be less than 254 characters");
  }

  // Validate message
  if (!data.message || typeof data.message !== "string") {
    errors.push("Message is required");
  } else if (data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters");
  } else if (data.message.length > 5000) {
    errors.push("Message must be less than 5000 characters");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

function sanitizeInput(text: string): string {
  // Remove potential XSS attempts and trim
  return text
    .trim()
    .replace(/<script[^>]*>.*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .substring(0, 5000);
}

export async function POST(req: NextRequest) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(req);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await req.json();

    // Validate input
    const validation = validateInput(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message),
    };

    // Log the contact form submission (you can replace this with actual email sending)
    console.log("Contact Form Submission:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip: rateLimitKey,
    });

    // TODO: Send email using a service like SendGrid, Resend, or Nodemailer
    // Example with console logging for now:
    console.log(`
      New Contact Form Submission:
      From: ${sanitizedData.name} (${sanitizedData.email})
      Message: ${sanitizedData.message}
    `);

    // Success response
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
