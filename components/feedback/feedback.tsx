"use client";
import React, { useState } from 'react';
import { 
  Megaphone, 
  Package, 
  Palette, 
  Rocket, 
  Code, 
  TrendingUp, 
  Users, 
  Settings,
  ArrowUp,
  MessageSquare
} from 'lucide-react';

// TypeScript interfaces
interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Badge {
  text: string;
  color: string;
}

interface DepartmentData {
  id: string;
  title: string;
  description: string;
  badges: Badge[];
  gradient: string;
}

const FeedbackSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('sales');
  const [inputValue, setInputValue] = useState<string>('');

  // Tab configuration
  const tabs: Tab[] = [
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'product', label: 'Product', icon: Package },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'founders', label: 'Founders', icon: Rocket },
    { id: 'engineering', label: 'Engineering', icon: Code },
    { id: 'sales', label: 'Sales', icon: TrendingUp },
    { id: 'hr', label: 'HR', icon: Users },
    { id: 'operations', label: 'Operations', icon: Settings }
  ];

  // Department data configuration
  const departmentData: Record<string, DepartmentData> = {
    marketing: {
      id: 'marketing',
      title: 'Marketing',
      description: 'TheySaid helps marketing teams understand brand perception, campaign effectiveness, and customer messaging preferences to optimize marketing strategies and improve ROI.',
      badges: [
        { text: 'Brand perception surveys', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Campaign feedback', color: 'bg-amber-100 text-amber-800' },
        { text: 'Message testing', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-blue-100 to-indigo-200'
    },
    product: {
      id: 'product',
      title: 'Product',
      description: 'TheySaid provides product teams with deep insights into user needs, feature requests, and product-market fit to build better products that customers actually want.',
      badges: [
        { text: 'Feature feedback', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'User interviews', color: 'bg-amber-100 text-amber-800' },
        { text: 'Product surveys', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-green-100 to-emerald-200'
    },
    design: {
      id: 'design',
      title: 'Design',
      description: 'TheySaid empowers design teams to validate design decisions, understand user experience pain points, and create more intuitive interfaces through user feedback.',
      badges: [
        { text: 'UX research', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Design validation', color: 'bg-amber-100 text-amber-800' },
        { text: 'Usability testing', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-purple-100 to-pink-200'
    },
    founders: {
      id: 'founders',
      title: 'Founders',
      description: 'TheySaid gives founders direct access to customer insights, market validation, and strategic feedback to make informed decisions about company direction and growth.',
      badges: [
        { text: 'Strategic feedback', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Market validation', color: 'bg-amber-100 text-amber-800' },
        { text: 'Vision alignment', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-orange-100 to-red-200'
    },
    engineering: {
      id: 'engineering',
      title: 'Engineering',
      description: 'TheySaid helps engineering teams understand technical pain points, performance issues, and feature priorities to build more robust and user-friendly systems.',
      badges: [
        { text: 'Technical feedback', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Performance reports', color: 'bg-amber-100 text-amber-800' },
        { text: 'Bug reports', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-slate-100 to-gray-200'
    },
    sales: {
      id: 'sales',
      title: 'Sales',
      description: 'TheySaid uncovers the \'why\' behind every deal—helping sales teams win more by understanding customer objections, refining messaging, and improving conversion rates.',
      badges: [
        { text: 'Win-loss interviews', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Lost customer interviews', color: 'bg-amber-100 text-amber-800' },
        { text: 'Contact sales forms', color: 'bg-cyan-100 text-cyan-800' }
      ],
      gradient: 'bg-gradient-to-br from-pink-100 to-purple-200'
    },
    hr: {
      id: 'hr',
      title: 'HR',
      description: 'TheySaid enables HR teams to gather employee feedback, understand workplace culture, and improve retention through comprehensive employee experience insights.',
      badges: [
        { text: 'Employee surveys', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Exit interviews', color: 'bg-amber-100 text-amber-800' },
        { text: 'Culture feedback', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-teal-100 to-cyan-200'
    },
    operations: {
      id: 'operations',
      title: 'Operations',
      description: 'TheySaid provides operations teams with process feedback, efficiency insights, and workflow optimization data to streamline operations and improve customer experience.',
      badges: [
        { text: 'Process feedback', color: 'bg-emerald-100 text-emerald-800' },
        { text: 'Workflow surveys', color: 'bg-amber-100 text-amber-800' },
        { text: 'Efficiency reports', color: 'bg-blue-100 text-blue-800' }
      ],
      gradient: 'bg-gradient-to-br from-yellow-100 to-orange-200'
    }
  };

  const currentDepartment = departmentData[activeTab];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log('Feedback submitted:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            All your feedback, in one place
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex flex-wrap justify-center gap-2 sm:gap-4" role="tablist">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-200
                    min-w-[80px] sm:min-w-[100px] h-16 sm:h-20
                    ${isActive 
                      ? 'bg-white shadow-md text-gray-900 scale-105' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50 hover:shadow-sm'
                    }
                  `}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
                  <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
          {/* Left Panel - Department Info */}
          <div 
            className={`
              ${currentDepartment.gradient} flex rounded-2xl p-6 sm:p-8 shadow-lg
              transition-all duration-300 ease-in-out
            `}
            role="tabpanel"
            id={`${activeTab}-panel`}
          >
            <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {currentDepartment.title}
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
              {currentDepartment.description}
            </p>

<div className="flex flex-col gap-3">
  {currentDepartment.badges.map((badge, index) => (
    <span
      key={index}
      className={`
        ${badge.color} px-3 py-2 rounded-md text-sm font-medium
        shadow-sm transition-all duration-200 hover:shadow-md
        inline-block w-fit
      `}
    >
      {badge.text}
    </span>
  ))}
</div></div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-start gap-3 mb-6">
              <div className="flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                What problem did you want to solve when you bought our product?
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Add a quick response"
                  className="
                    w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    text-gray-900 placeholder-gray-500 transition-all duration-200
                  "
                  aria-label="Feedback response input"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="
                    absolute right-2 top-1/2 transform -translate-y-1/2
                    w-8 h-8 bg-gray-400 hover:bg-gray-500 disabled:bg-gray-300
                    rounded-full flex items-center justify-center
                    transition-all duration-200 disabled:cursor-not-allowed
                  "
                  aria-label="Submit feedback"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
  );
};

export default FeedbackSystem;