"use client";
import { useRouter } from "next/navigation";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/About";
import { InterestsSection } from "../components/Interests/Interests";
import { NavBar } from "../components/NavBar";

export const Landing = () => {
  const router = useRouter();

  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <InterestsSection />
    </div>
  );
};
