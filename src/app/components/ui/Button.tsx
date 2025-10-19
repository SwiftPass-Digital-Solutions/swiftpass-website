import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg py-3 px-6 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-500 text-white border-primary-400 shadow-[0px_4px_0px_0px_#05175F]',
    secondary: 'bg-white text-dark-500 shadow-[0px_4px_0px_0px_#DCDCDC]',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
