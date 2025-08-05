'use client';

import React from 'react';
import { Header, ProductHuntBadge, RatingBadge, CTAButton } from './ui';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center ">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <ProductHuntBadge />
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <RatingBadge />
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 mb-8">
              <h1 className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="block text-xl sm:text-xl md:text-4xl text-gray-600 font-medium mb-2">
                  Don't create a survey.
                </span>
                <span className="block text-4xl sm:text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Start a conversation
                </span>
              </h1>

              <p
                className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                10x your insights with AI surveys and interviews
              </p>
            </div>

            {/* CTA Section */}
            <div
              className="flex flex-col items-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <CTAButton>
                Get Started Free
              </CTAButton>
              <p className="text-sm text-gray-500 italic">
                No credit card required
              </p>
            </div>
          </div>
          <div className='mt-10 mb-0'>
            <img src="hero.png" alt="" />
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>
      <section className='bg-white p-2'>
        <div className="flex justify-evenly ml-10 mr-10 p-4" >
          <img className='h-10 m-4 w-36' src="s1.png" alt="" />
          <img className='h-10 m-4 w-36' src="s2.png" alt="" />
          <img className='h-10 m-4 w-36' src="s3.png" alt="" />
          <img className='h-10 m-4 ' src="s4.png" alt="" />
          <img className='h-10 m-4 w-36' src="s5.png" alt="" />
          <img className='h-10 m-4 w-36' src="s6.png" alt="" />
          <img className='h-10 m-4 w-36' src="s7.png" alt="" />
          <img className='h-10 m-4 w-36' src="s8.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;