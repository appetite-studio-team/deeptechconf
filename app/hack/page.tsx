'use client';

import { useEffect } from 'react';

export default function HackRedirect() {
  useEffect(() => {
    // Add meta refresh for better social media compatibility
    const metaRefresh = document.createElement('meta');
    metaRefresh.httpEquiv = 'refresh';
    metaRefresh.content = '3;url=https://dorahacks.io/hackathon/hack-for-good/';
    document.getElementsByTagName('head')[0].appendChild(metaRefresh);

    // Delay redirect to allow social media scrapers to read metadata
    const timer = setTimeout(() => {
      window.location.href = 'https://dorahacks.io/hackathon/hack-for-good/';
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      if (metaRefresh.parentNode) {
        metaRefresh.parentNode.removeChild(metaRefresh);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text">
      <p>Redirecting to hackathon...</p>
    </div>
  );
}

