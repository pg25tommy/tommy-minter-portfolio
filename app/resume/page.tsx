import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-mint hover:text-mint-light transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
          Resume
        </h1>

        <div className="bg-grey-light border border-moss/20 rounded-lg overflow-hidden">
          <div className="p-8 border-b border-moss/20">
            <p className="text-text-secondary mb-6">
              Download my resume or view it below.
            </p>

            <a
              href="/Tommy_MInter_Resume.pdf"
              download="Tommy_Minter_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mint text-grey-dark rounded-lg hover:bg-mint-light transition-all hover:scale-105 font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* PDF Viewer */}
          <iframe
            src="/Tommy_MInter_Resume.pdf"
            className="w-full h-[800px]"
            title="Tommy Minter Resume"
          />
        </div>
      </div>
    </div>
  );
}
