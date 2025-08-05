import React, { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Button Component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', children, className, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const sizeStyles = {
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-14 h-14",
    };
    
    const variantStyles = {
      default: "bg-nav-button bg-black text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-sm",
      ghost: "bg-nav-button text-foreground hover:bg-nav-button-ghost-hover hover:scale-105 active:scale-95",
    };

    

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    const baseStyles = "bg-testimonial rounded-lg shadow-sm p-6 transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 border border-border/50";
    return (
      <div ref={ref} className={cn(baseStyles, className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Avatar Component
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, size = 'lg', className, ...props }, ref) => {
    const sizeStyles = {
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-16 h-16", // 64px for testimonials
    };
    const baseStyles = "rounded-full object-cover border-2 border-border/20 transition-all duration-300";
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(baseStyles, sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Avatar.displayName = 'Avatar';