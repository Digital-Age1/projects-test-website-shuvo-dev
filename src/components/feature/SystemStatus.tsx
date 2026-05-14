import { useEffect, useRef } from 'react';

export default function SystemStatus() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.getElementById('statusgator-embed-script');
    if (existing) return;

    const script = document.createElement('script');
    script.id = 'statusgator-embed-script';
    script.src = 'https://statusgator.com/status_embed/058a1a1e-87e3-4ec7-81e1-54716bbc2b3e.js';
    script.type = 'text/javascript';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Script stays for other instances; cleanup handled by id check
    };
  }, []);

  return (
    <div className="py-5 border-t border-gray-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <i className="ri-server-line text-gray-500 text-sm"></i>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">System Status</span>
        </div>
        <div ref={containerRef} className="statusgator-widget-container">
          {/* StatusGator embed renders here */}
        </div>
      </div>
    </div>
  );
}