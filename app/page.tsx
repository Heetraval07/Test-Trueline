import HeroSlider from "@/components/home/HeroSlider";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesTabs from "@/components/home/ServicesTabs";
import StatsTestimonials from "@/components/home/StatsTestimonials";
import IndustriesCarousel from "@/components/home/IndustriesCarousel";
import ContactSection from "@/components/home/ContactSection";
import { ManagedErp, ServicesMarquee, WhyChooseUs, WhyTrust } from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <PartnersCarousel />
      <AboutIntro />
      <ServicesTabs />
      <StatsTestimonials />
      <WhyChooseUs />
      <ServicesMarquee />
      <ManagedErp />
      <IndustriesCarousel />
      <WhyTrust />
      <ContactSection
        tag="Get In Touch"
        title="Book Your Free IT Consultation"
        text="Fill in your details and our IT experts will contact you within 24 hours to discuss your requirements."
        showAcronis
      />
    </>
  );
}
