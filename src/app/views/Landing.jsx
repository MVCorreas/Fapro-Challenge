"use client";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/About";
import { SolutionsSection } from "../components/Solutions";
import { NavBarLanding } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Reviews } from "../components/Reviews";

export const Landing = () => {
  return (
    <div>
      <NavBarLanding />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};
