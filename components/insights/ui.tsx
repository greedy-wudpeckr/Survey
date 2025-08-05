"use client";

import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

// Button Component
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    gradient: 'bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 text-white hover:from-pink-500 hover:via-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105',
    default: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Navigation Tabs Component
interface NavigationTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-16">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 border-2 py-3 text-lg font-medium rounded-2xl transition-all duration-200 ${
            activeTab === tab 
              ? 'bg-gray-100 text-gray-900 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={` rounded-2xl shadow-lg  ${className}`}>
      {children}
    </div>
  );
};

// Chat Interface Component
export const ChatInterface: React.FC = () => {
  return (
    <Card className="p-6 max-w-md mx-auto h-fit">
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-800">THEYSAID</span>
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
        </div>
      </div>
      
      {/* Chat Content Area */}
      <div className="space-y-4 mb-6 min-h-[180px] flex flex-col justify-center">
      </div>
      
      {/* Chat Input */}
      <div className="relative">
                <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
            🤖
          </div>
          <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
            <p className="text-gray-800 text-sm leading-relaxed">
              Hey Taylor, quick check-in! You signed up for They Said last week—how's it going so far?
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full p-2">
          <input 
            type="text" 
            placeholder=""
            className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none"
            readOnly
          />
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Card>
  );
};

// Content Card Component
interface ContentCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick 
}) => {
  return (
    <Card className="p-8 max-w-md">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-base">
          {description}
        </p>
        <Button 
          variant="gradient" 
          size="lg" 
          className="gap-2"
          onClick={onButtonClick}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
};