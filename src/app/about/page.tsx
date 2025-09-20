"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { AboutHero } from "./about-hero";
import { WhyChoose } from "./why-choose";
import { Integrations } from "./integrations";
import { CallToAction } from "./call-to-action";
import { PlayStationButtonsBackground } from "@/components/background/playstation-buttons";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4
};

const mainVariants = {
  initial: { y: 20, opacity: 0 },
  in: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.2
    }
  }
};

const sectionVariants = {
  initial: { y: 30, opacity: 0 },
  in: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function AboutPage() {
  return (
    <motion.div 
      className="h-full w-full bg-white relative"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PlayStationButtonsBackground />
      <Header />
      <motion.main 
        className="h-full w-full relative z-10"
        variants={mainVariants}
      >
        <motion.div variants={sectionVariants}>
          <AboutHero />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <WhyChoose />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Integrations />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <CallToAction />
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
