"use client";
import { useRouter } from "next/navigation";
import { HeroSection } from "./HeroSection/HeroSection";
import { AboutSection } from "./About";
import { InterestsSection } from "./Interests/Interests";
import { NavBar } from "./NavBar";

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
