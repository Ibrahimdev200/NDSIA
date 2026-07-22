import React from 'react';

interface NDSIALogoProps {
  showTagline?: boolean;
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const NDSIALogo: React.FC<NDSIALogoProps> = ({ 
  className = 'h-12'
}) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src="/logo.jpg" 
        alt="Nembe Digital Skills & Innovation Academy Logo" 
        className="h-full w-auto object-contain rounded-lg" 
      />
    </div>
  );
};
