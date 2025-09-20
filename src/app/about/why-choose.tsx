"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Gamepad2, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";


export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
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
            Why Choose RyudenHub?
          </motion.h2>
        </motion.div>

        {/* Simplified Content */}
        <motion.div 
          ref={ref}
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-left font-body text-lg text-gray-700 leading-relaxed">
                RyudenHub brings all your gaming needs together in one place. 
                Get AI-enhanced tips and strategies, connect with other players, and explore detailed game maps—everything you need to level up your gaming.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-left font-body text-lg text-gray-700 leading-relaxed">
                Track your achievements across PlayStation, Xbox, Steam, and Discord. 
                No more switching between different apps or missing out on progress.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-left font-body text-lg text-gray-700 leading-relaxed">
                Join the community that&apos;s already using RyudenHub to get more from their games. 
                Whether you&apos;re casual or competitive, we&apos;ve built the tools you actually want to use.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="pt-8"
          >
            <Button variant="primary" size="lg">
              Explore Supported Games
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
