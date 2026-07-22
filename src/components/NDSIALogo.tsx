import React from 'react';

interface NDSIALogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const NDSIALogo: React.FC<NDSIALogoProps> = ({ 
  showTagline = false, 
  className = 'h-10', 
  variant = 'color' 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon embodying the core NDSIA logo elements */}
      <svg
        viewBox="0 0 200 200"
        className="h-full w-auto filter drop-shadow-sm flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring / Riverine Wave Arc */}
        <path
          d="M 60,180 A 80,80 0 1,1 180,80"
          stroke="#0f2b5c"
          strokeWidth="10"
          strokeLinecap="round"
          className="dark:stroke-blue-400"
        />
        
        {/* Palm Trees / Riverine Stilt Cabin Detail (Nembe Heritage) */}
        <path
          d="M 30,120 L 35,90 M 35,90 C 25,85 20,95 20,95 M 35,90 C 35,80 45,85 45,85"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          className="dark:stroke-emerald-400"
        />
        <path
          d="M 22,125 C 22,120 40,120 40,125 M 25,125 L 25,135 L 37,135 L 37,125"
          stroke="#0f2b5c"
          strokeWidth="2.5"
          className="dark:stroke-blue-400"
        />
        <path
          d="M 15,140 L 45,140"
          stroke="#059669"
          strokeWidth="3"
          className="dark:stroke-emerald-400"
        />

        {/* N-Circuit Node (Deep Blue - Left vertical leg of N) */}
        <path
          d="M 75,55 L 75,145"
          stroke="#0f2b5c"
          strokeWidth="12"
          strokeLinecap="round"
          className="dark:stroke-blue-500"
        />
        {/* Circuit Traces */}
        <circle cx="75" cy="70" r="4" fill="#ffffff" />
        <circle cx="75" cy="100" r="4" fill="#ffffff" />
        <circle cx="75" cy="130" r="4" fill="#ffffff" />
        <path d="M 75,70 H 90" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M 75,100 H 95 L 105,110" stroke="#ffffff" strokeWidth="2.5" />

        {/* Rising Empowered Person (Emerald Green - Right curve of N) */}
        <path
          d="M 100,145 C 100,110 115,80 135,70 L 135,145"
          stroke="#059669"
          strokeWidth="12"
          strokeLinecap="round"
          className="dark:stroke-emerald-500"
        />
        <circle cx="135" cy="45" r="10" fill="#059669" className="dark:fill-emerald-400" />

        {/* Shooting Orange Star & Cursor Path (Accent) */}
        <path
          d="M 85,35 C 120,30 155,20 170,10"
          stroke="#ea580c"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="4 4"
          className="dark:stroke-orange-400"
        />
        {/* Star */}
        <path
          d="M 170,10 L 173,3 L 176,10 L 183,10 L 177,14 L 180,21 L 170,16 L 160,21 L 163,14 L 157,10 H 170 Z"
          fill="#ea580c"
          className="dark:fill-orange-400"
        />

        {/* Open Book & Laptop (Foundation base) */}
        <path
          d="M 50,165 C 75,160 100,170 100,170 C 100,170 125,160 150,165 L 150,180 C 125,175 100,185 100,185 C 100,185 75,175 50,180 Z"
          fill="#ffffff"
          stroke="#0f2b5c"
          strokeWidth="3.5"
          className="dark:fill-slate-800 dark:stroke-blue-400"
        />
        <path
          d="M 140,135 H 175 V 160 H 140 Z M 135,160 H 180 L 185,168 H 130 Z"
          fill="#ffffff"
          stroke="#0f2b5c"
          strokeWidth="3"
          strokeLinejoin="round"
          className="dark:fill-slate-800 dark:stroke-blue-400"
        />
      </svg>
      
      {/* Academy Title Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none text-[#0f2b5c] dark:text-blue-400">
          NEMBE
        </h1>
        <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#059669] dark:text-emerald-400 uppercase leading-none mt-0.5">
          Digital Skills & Innovation Academy
        </p>
        
        {/* NDSIA Badge & Optional Tagline */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[9px] font-black px-1.5 py-0.5 bg-[#059669] text-white dark:bg-emerald-500 rounded tracking-wider leading-none">
            NDSIA
          </span>
          {showTagline && (
            <span className="hidden sm:inline text-[9px] font-semibold text-slate-500 dark:text-slate-400">
              Empowering People. Transforming Communities.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
