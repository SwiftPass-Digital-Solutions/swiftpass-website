interface IconProps {
  className?: string;
  color?: string;
}

function MenuIcon({ className = "h-6 w-6", color = "currentColor" }: IconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 25" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 12.71H22.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5 21.71H22.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.5 3.70996H22.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export { MenuIcon };