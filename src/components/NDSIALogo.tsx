import React from 'react';

interface NDSIALogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const NDSIALogo: React.FC<NDSIALogoProps> = ({ 
  className = 'h-14 sm:h-16'
}) => {
  return (
    <div className="flex items-center select-none">
      <img 
        src="/logo-full.jpg" 
        alt="Nembe Digital Skills & Innovation Academy Logo" 
        className={`${className} w-auto object-contain rounded-lg`} 
      />
    </div>
  );
};
