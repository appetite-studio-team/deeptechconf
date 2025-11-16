'use client';

export default function HackRedirect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-medium">Hackathon Concluded</h1>
        <p className="text-neutral-400">The hackathon has ended. Thank you to all participants!</p>
        <a href="/" className="inline-block mt-4 text-accent hover:text-white underline">
          Return to homepage
        </a>
      </div>
    </div>
  );
}

