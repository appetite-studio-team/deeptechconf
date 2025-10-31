'use client';

import { useEffect } from 'react';

export default function HackRedirect() {
  useEffect(() => {
    // Immediate redirect - metadata is in layout for SEO/scrapers
    window.location.href = 'https://dorahacks.io/hackathon/hack-for-good/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text">
      <p>Redirecting to hackathon...</p>
    </div>
  );
}

