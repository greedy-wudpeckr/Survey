'use client';

import { useState } from 'react';
import { Button, Card, Avatar } from './ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Farmer",
    title: "Chief Revenue Officer",
    company: "Nezasa",
    quote: "Implementing TheySaid has led to a 5-10% increase in qualified leads from our existing customers in just a few months while reducing churn. The results speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Srikrishnan Ganesan", 
    title: "Co-Founder & CEO",
    company: "Rocketlane",
    quote: "Integrating TheySaid has been a game-changer. We've seen a 5-10% decrease in customer churn with an increase in upsell opportunities since its implementation.",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Brook P.",
    title: "VP, Marketing", 
    company: "DX",
    quote: "How did TheySaid AI come up with such great question recommendations? These are questions that our teams really want to know and discussed internally a lot. I am impressed!",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  // Get the testimonials to display (3 at a time, wrapping around)
  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < 3; i++) {
      const indexToDisplay = (currentIndex + i) % totalTestimonials;
      displayed.push(testimonials[indexToDisplay]);
    }
    return displayed;
  };

  const displayedTestimonials = getDisplayedTestimonials();

  return (
    <section className="py-16 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <h2 className="text-4xl font-bold text-foreground leading-tight">
            See what our customers<br />had to say.
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="md"
              onClick={handlePrevious}
              aria-label="Previous testimonials"
              className="transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size="md"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.id}-${currentIndex}-${index}`} 
              className="flex flex-col h-full transition-all duration-500 ease-out animate-in fade-in-0 slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="flex-1 space-y-4">
                {/* Avatar and User Info */}
                <div className="flex items-start space-x-4">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    size="lg"
                    className="flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-semibold text-foreground leading-tight">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.title} @ {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-base leading-relaxed text-foreground/90 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}