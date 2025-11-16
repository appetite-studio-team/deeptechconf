'use client';

export default function ApplyRedirect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-medium">Applications Closed</h1>
        <p className="text-neutral-400">The event has concluded. Thank you for your interest!</p>
        <a href="/" className="inline-block mt-4 text-accent hover:text-white underline">
          Return to homepage
        </a>
      </div>
    </div>
  );
}

