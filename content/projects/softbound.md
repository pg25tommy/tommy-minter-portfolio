---
version: 1.0
owner: Tommy Minter
status: Active
---

# SoftBound — Project Specification

## Project Summary
SoftBound is an analog-inspired scrapbook web application featuring a custom-built browser graphics engine. It enables users to create tactile digital pages with zooming, panning, tape overlays, textured backgrounds, and image manipulation. The project emphasizes privacy, intentionality, and a "de-socialized" digital experience.

---

## Roles
- Full-Stack Developer
- Graphics & UI Programmer
- System Architect

---

## Technologies
- Next.js
- TypeScript
- PixiJS
- Node.js
- Custom Rendering Engine
- Custom File Handling & Permissions Logic

---

## System Overview

### Custom Graphics Engine
A bespoke PixiJS-powered engine enabling:
- GPU-accelerated zoom & pan
- Drag-and-drop interaction
- Rotation and transform tools
- Pixel-level precision
- Custom texture caching
- Layered rendering (paper → photos → tape → UI)

### Admin & Page Management
Includes:
- Admin authentication
- Protected routes
- CRUD for scrapbook pages
- Image uploading & storage
- Server-side validation

### Permissions & Security
- Role-based access
- Protected API endpoints
- Public vs. private content separation
- Middleware-enforced session logic

### Interaction & UI Tools
- Center-safe canvas
- Toolbar-safe zooming
- Soft vignette lighting
- Tape overlays
- Bounded image placement

### Design Philosophy
- Warm textured paper
- Polaroid frames
- Noise, grain, analog imperfections
- Slow, intentional, handcrafted UX

---

## Outcome
SoftBound includes:
- A functioning rendering engine
- Secure backend
- Public gallery
- Fully analog-inspired UI
