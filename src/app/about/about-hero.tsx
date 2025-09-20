"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Target, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const featureVariants = {
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

export function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Combined Header & Mission - Left/Right Layout */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Container - Header */}
          <motion.div 
            className="flex flex-col justify-center"
            variants={itemVariants}
          >
            <motion.h1 
              className="font-display text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why We Built
              <motion.span 
                className="block text-black"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                RyudenHub
              </motion.span>
            </motion.h1>
            <motion.p 
              className="font-body text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We believe gaming should be more than just playing. It should be about community, 
              growth, and having all your gaming needs in one place.
            </motion.p>
          </motion.div>

          {/* Right Container - Mission */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-center"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.h2 
              className="font-display text-2xl font-bold text-black mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="font-body text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We&apos;re creating the ultimate gaming ecosystem where players can access everything they need: 
              from game guides enhanced by AI to community forums and platform integrations. 
              No more switching between dozens of websites and apps.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Features Grid - Nike Style */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
              }
            }
          }}
        >
          {/* Feature 1 */}
          <motion.div 
            className="group relative bg-white transition-colors duration-300 cursor-pointer"
            variants={featureVariants}
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
                <Gamepad2 className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Content - Bold Typography */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                  All Games, One Hub
                </h3>
                <motion.div 
                  className="w-2 h-2 bg-black rounded-full group-hover:bg-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.5 }}
                />
              </div>
              
              <p className="font-body text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                We support your favorite games with dedicated tools, interactive maps, and comprehensive guides.
              </p>

              {/* Highlight Badge - Minimal */}
              <div className="inline-block">
                <span className="font-ui text-xs font-medium text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                  Comprehensive
                </span>
              </div>
            </div>

            {/* Subtle Hover Line */}
            <motion.div 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-out"
              whileHover={{ width: "100%" }}
            />
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="group relative bg-white transition-colors duration-300 cursor-pointer"
            variants={featureVariants}
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
                <Users className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Content - Bold Typography */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                  Community First
                </h3>
                <motion.div 
                  className="w-2 h-2 bg-black rounded-full group-hover:bg-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.5 }}
                />
              </div>
              
              <p className="font-body text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Connect with fellow gamers and share experiences in our vibrant community forums.
              </p>

              {/* Highlight Badge - Minimal */}
              <div className="inline-block">
                <span className="font-ui text-xs font-medium text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                  Active
                </span>
              </div>
            </div>

            {/* Subtle Hover Line */}
            <motion.div 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-out"
              whileHover={{ width: "100%" }}
            />
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="group relative bg-white transition-colors duration-300 cursor-pointer"
            variants={featureVariants}
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
                <Target className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            {/* Content - Bold Typography */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                  AI-Enhanced Gaming
                </h3>
                <motion.div 
                  className="w-2 h-2 bg-black rounded-full group-hover:bg-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.5 }}
                />
              </div>
              
              <p className="font-body text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                AI-powered insights and strategies that enhance your gaming experience and help you improve.
              </p>

              {/* Highlight Badge - Minimal */}
              <div className="inline-block">
                <span className="font-ui text-xs font-medium text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-300">
                  Revolutionary
                </span>
              </div>
            </div>

            {/* Subtle Hover Line */}
            <motion.div 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-out"
              whileHover={{ width: "100%" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
