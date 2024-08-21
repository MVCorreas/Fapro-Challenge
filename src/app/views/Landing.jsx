"use client";
import { useRouter } from "next/navigation";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/About";
import { SolutionsSection } from "../components/Solutions";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Landing = () => {
  const router = useRouter();

  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <Footer />
    </div>
  );
};
