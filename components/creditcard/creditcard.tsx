import React from 'react';

export default function CreditCard() {
  return (
    <div className="max-w-7xl bg-[#1B1C1F] rounded-2xl mx-auto overflow-hidden relative">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Card content */}
      <div className="relative z-10 py-16 h-96 px-52 flex flex-col gap-8">
          <div className='max-w-sm text-4xl text-white mb-4 flex flex-col  justify-center'>
            <span>
              Double the insights
            </span>
            <span>
              in half the time with
            </span>
            <span className='bg-gradient-to-r from-[#FF95A1] to-[#A49DFF] text-transparent bg-clip-text font-bold'>
              AI Conversations
            </span>
          </div>
          <div className='flex flex-col'>
            <button className='bg-gradient-to-b from-[#FECDD3] to-[#C7D2FE] rounded-3xl max-w-fit px-6 py-3'>
              <span className='text-[#1B1C1F] font-bold text-lg'>Get Started Free</span>
            </button>
            <span className='text-white text-xs ml-1 mt-2 font-extralight italic'>
              No credit card required
            </span>
          </div>
          <div
            className="absolute  -bottom-[100px] -right-[20px] w-[600px] h-[450px] rounded-[100px] blur-[200px] z-0"
            style={{
              background: 'radial-gradient(circle, #FF95A1 0%, #A49DFF 100%)',
            }}
          />
          <img src="credit.png" alt="virtual credit card" className='absolute bottom-0 right-0 w-[528px] h-[340px]' />
      </div>
    </div>
  );
}
