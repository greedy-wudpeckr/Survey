'use client';

import React from 'react';
import { ChevronDown, Trophy, Star, ArrowRight, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex bg-white items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-[#FB7185] to-[#818CF8] text-white hover:from-pink-600 hover:to-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-purple-500',
    ghost: 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-purple-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

// Logo Component
export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-1">
      <img src="logo.png" className='h-10 w-40' alt="" />
    </div>
  );
};

// Navigation Item Component
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, hasDropdown = false }) => {
  return (
    <a
      href={href}
      className="h-10 flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
    >
      <span>{children}</span>
      {hasDropdown && <ChevronDown className="w-4 h-4" />}
    </a>
  );
};

// Badge Components
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'rating';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'orange', className }) => {
  const variants = {
    orange: 'bg-white text-orange-500 border-2 border-orange-500 rounded-xl px-4 py-2 ',
    rating: 'bg-white text-gray-900 border border-gray-200 rounded-full p-2'
  };

  return (
    <div className={cn(
      'inline-flex items-center  font-medium text-sm',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};

export const ProductHuntBadge: React.FC = () => {
  return (
    <Badge variant="orange" className="space-x-2">
      <Award className="size-1 text-orange-500" />
      <div className="flex flex-col items-start">
        <span className="text-xs">PRODUCT HUNT</span>
        <span className="text-sm font-bold">#1 Product of the Day</span>
      </div>
    </Badge>
  );
};

export const RatingBadge: React.FC = () => {
  return (
    <Badge variant="rating" className="space-x-2">
      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">G2</span>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm font-bold">4.8/5 G2 Rating</span>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </Badge>
  );
};

// CTA Button with Arrow
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick, className }) => {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={onClick}
      className={cn('space-x-2 transform hover:scale-105', className)}
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5" />
    </Button>
  );
};

// Header Component
export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="flex items-center justify-between h-16 px-10 sm:px-16 lg:px-24">
        {/* Logo & Navigation */}
        <div className='flex items-center justify-center space-x-32'>
          <Logo />

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#product">Product Overview</NavItem>
            <NavItem href="#resources" hasDropdown>Resources</NavItem>
            <NavItem href="#pricing">Pricing</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="md">
            Login
          </Button>
          <Button variant="ghost" size="md">
            Get Started - Free
          </Button>
        </div>
      </div>
    </header>
  );
};