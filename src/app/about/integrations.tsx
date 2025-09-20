"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import {
  ArrowRight,
  Gamepad2,
  MessageCircle,
  Trophy,
  Youtube,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "backOut" as const
    }
  }
};

export function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const integrations = [
    {
      icon: Youtube,
      title: "YouTube",
      description: "Share gaming content and achievements",
      highlight: "Popular",
    },
    {
      icon: Trophy,
      title: "PlayStation 5",
      description: "Sync PS5 trophies and achievements",
      highlight: "Official",
    },
    {
      icon: Zap,
      title: "Steam",
      description: "Connect your Steam library",
      highlight: "Complete",
    },
    {
      icon: Gamepad2,
      title: "Xbox",
      description: "Link Xbox for cross-platform data",
      highlight: "Cross-platform",
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Community features and servers",
      highlight: "Social",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header - Nike Style */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="font-display text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Connect Your Gaming Platforms
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We connect all your gaming platforms around you, creating one
            unified gaming experience.
          </motion.p>
        </motion.div>

        {/* Integrations - Nike Style */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="group relative bg-white transition-colors duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Icon - Clean and Minimal */}
              <motion.div 
                className="w-16 h-16 mb-8"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-full h-full bg-black rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300"
                  variants={iconVariants}
                >
                  {React.createElement(integration.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </motion.div>
              </motion.div>

              {/* Content - Bold Typography */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                    {integration.title}
                  </h3>
                  <motion.div 
                    className="w-2 h-2 bg-black rounded-full group-hover:bg-gray-600 transition-colors duration-300"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                <p className="font-body text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {integration.description}
                </p>

                {/* Highlight Badge - Minimal */}
                <div className="inline-block">
                  <span className="font-ui text-xs font-medium text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                    {integration.highlight}
                  </span>
                </div>
              </div>

              {/* Subtle Hover Line */}
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-out"
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Button variant="primary" size="lg">
            Connect Your Platforms
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
