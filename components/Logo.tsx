
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'default' }) => {
  const brandBlue = variant === 'white' ? '#FFFFFF' : '#3B9AD9';
  const leadColor = variant === 'white' ? '#FFFFFF' : '#323232';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 400 140" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto"
        fill="none"
      >
        {/* Person Icon above the 'o' */}
        <g transform="translate(112, 42)">
          {/* Head */}
          <circle cx="20" cy="5" r="5" fill={brandBlue} />
          {/* Body/Arms */}
          <path 
            d="M5 18C10 12 30 12 35 18L30 25C25 20 15 20 10 25L5 18Z" 
            fill={brandBlue} 
          />
        </g>
        
        {/* Kofuku Text Reconstructed with SVG for perfect fidelity */}
        <g transform="translate(10, 100)">
          <text 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="750" 
            fontSize="82" 
            fill={brandBlue}
            style={{ letterSpacing: '-1.5px' }}
          >
            K<tspan dy="0">o</tspan>fuku
          </text>
        </g>
        
        {/* LEAD Text with specific geometric style */}
        <g transform="translate(225, 125)">
          <text 
            fontFamily="ui-monospace, monospace" 
            fontWeight="800" 
            fontSize="24" 
            fill={leadColor}
            style={{ letterSpacing: '12px' }}
          >
            LE<tspan fill={brandBlue}>^</tspan>D
          </text>
        </g>
      </svg>
    </div>
  );
};
