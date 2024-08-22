"use client";
import { useRouter } from "next/navigation";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/About";
import { SolutionsSection } from "../components/Solutions";
import { NavBarLanding } from "../components/NavBar"
import { Footer } from "../components/Footer";
import {ContactForm} from "../components/ContactForm";

export const Landing = () => {
  const router = useRouter();

  return (
    <div>
      <NavBarLanding />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};
