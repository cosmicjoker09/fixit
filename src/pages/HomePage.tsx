import { Hero } from '../components/Hero';
import { Professionalism } from '../components/Professionalism';
import { TrustBar } from '../components/TrustBar';
import { Services } from '../components/Services';
import { CTASection } from '../components/CTASection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Brands } from '../components/Brands';
import { Testimonials } from '../components/Testimonials';
import { ServiceArea } from '../components/ServiceArea';
import { BookingForm } from '../components/BookingForm';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Professionalism />
      <TrustBar />
      <Services />
      <CTASection />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <ServiceArea />
      <BookingForm />
    </div>
  );
}
