import { useState, useEffect } from 'react';

declare global {
  interface Window {
    willyweather_warnings?: {
      warnings?: Array<{
        type?: string;
        description?: string;
        severity?: string;
      }>;
    };
  }
}

export default function WeatherWarningBanner() {
  const [warnings, setWarnings] = useState<Array<{ type: string; description: string; severity: string }>>([]);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Poll for WillyWeather data after script loads
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (window.willyweather_warnings?.warnings?.length) {
        const raw = window.willyweather_warnings.warnings;
        setWarnings(
          raw.map((w) => ({
            type: w.type || 'Weather Warning',
            description: w.description || '',
            severity: w.severity || 'moderate',
          }))
        );
        clearInterval(interval);
      }
      if (attempts > 20) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (dismissed || warnings.length === 0) return null;

  const isExtreme = warnings.some((w) => w.severity?.toLowerCase() === 'extreme' || w.severity?.toLowerCase() === 'severe');

  return (
    <div className={`w-full z-[60] ${isExtreme ? 'bg-red-600' : 'bg-amber-500'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <i className={`ri-alert-line text-lg ${isExtreme ? 'text-white' : 'text-white'}`}></i>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 min-w-0">
            {warnings.map((w, i) => (
              <span key={i} className="text-white text-sm font-semibold whitespace-nowrap">
                {w.type}{w.description ? `: ${w.description}` : ''}
                {i < warnings.length - 1 && <span className="mx-2 opacity-50">|</span>}
              </span>
            ))}
          </div>
          <a
            href="https://www.willyweather.com/ma/hampden-county/westfield.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 text-xs underline whitespace-nowrap hover:text-white transition-colors flex-shrink-0"
          >
            Full forecast
          </a>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white transition-colors flex-shrink-0 cursor-pointer"
          aria-label="Dismiss weather warning"
        >
          <i className="ri-close-line text-lg"></i>
        </button>
      </div>
    </div>
  );
}