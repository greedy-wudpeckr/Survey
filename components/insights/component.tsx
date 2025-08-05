"use client";

import React, { useState } from 'react';
import { NavigationTabs, ContentCard, ChatInterface } from './ui';

const Insights: React.FC = () => {
  const tabs = ['AI Surveys', 'AI Interviews', 'AI Forms', 'AI User Tests', 'AI Polls', 'AI Pulses'];
  const [activeTab, setActiveTab] = useState('AI Pulses');

  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI unlocks insights you can't<br />
            get any other way
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Users give feedback while chatting with AI
          </p>
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 bg-gray-50 p-12 rounded-md items-center max-w-5xl mx-auto">
          {/* Left Content Card */}
          <div className="order-2 lg:order-1">
            <ContentCard
              title="AI Pulses"
              description="Take the pulse of employees and customers along their journey with you to detect problems or opportunities for growth early."
              buttonText="Get Started Free"
              onButtonClick={handleGetStarted}
            />
          </div>

          {/* Right Chat Interface */}
          <div className="order-1 lg:order-2">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;