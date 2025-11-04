'use client';

import { useEffect } from 'react';

export default function ApplyRedirect() {
  useEffect(() => {
    // Immediate redirect - metadata is in layout for SEO/scrapers
    window.location.href = 'https://tally.so/r/wv79j0';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text">
      <p>Redirecting to application form...</p>
    </div>
  );
}

