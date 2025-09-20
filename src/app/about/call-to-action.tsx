"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="font-display text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
          variants={itemVariants}
        >
          Ready to Level Up Your Gaming Experience?
        </motion.h2>
        <motion.p
          className="font-body text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Join thousands of gamers using RyudenHub to enhance their gaming
          journey. Get access to AI-enhanced gaming tools, community features, and all the
          tools you need.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="secondary" size="lg">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
