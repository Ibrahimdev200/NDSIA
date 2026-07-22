import React from 'react';

interface NDSIALogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const NDSIALogo: React.FC<NDSIALogoProps> = ({ 
  className = 'h-10'
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <img 
        src="/logo-icon.png" 
        alt="NDSIA Logo Icon" 
        className={`${className} w-auto object-contain rounded-xl shadow-sm border border-slate-100/50 dark:border-slate-800/50`} 
      />
      <div className="flex flex-col">
        <span className="font-black text-base sm:text-lg tracking-wider text-[#0f2b5c] dark:text-white leading-tight uppercase font-sans">
          NDSIA
        </span>
        <span className="text-[9px] font-bold text-slate-450 dark:text-slate-450 uppercase tracking-widest leading-none mt-0.5">
          Opu-Nembe Academy
        </span>
      </div>
    </div>
  );
};
