import Insights from '@/components/insights/component';
import TestimonialsSection from '@/components/testimonials/testimonials';
import FeedbackSystem from '@/components/feedback/feedback';
import Footer from '@/components/footer/footer';
import IntegrationsComponent from '@/components/Integration/workflow';
import ImgC from '@/components/imagee/page';
import Hero from '@/components/hero/hero';
import CreditCard from '@/components/creditcard/creditcard';
import FeedbackToolUI from '@/components/bento/ui';

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsSection />
      <FeedbackToolUI/>
      <Insights />
      <ImgC />
      <FeedbackSystem />
      <IntegrationsComponent />
      <CreditCard />
      <Footer />
    </>
  );
}