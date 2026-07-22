import React from 'react';

interface NDSIALogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const NDSIALogo: React.FC<NDSIALogoProps> = ({ 
  className = 'h-12 sm:h-14'
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <img 
        src="/logo-full.jpg" 
        alt="NDSIA Logo Icon" 
        className={`${className} w-auto object-contain rounded-xl shadow-sm`} 
      />
      <div className="flex flex-col">
        <span className="font-black text-lg sm:text-xl tracking-wider text-[#0f2b5c] dark:text-white leading-tight uppercase font-sans">
          NDSIA
        </span>
      </div>
    </div>
  );
};
