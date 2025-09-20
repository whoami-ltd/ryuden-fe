"use client";

import { motion } from "framer-motion";

interface PlayStationButtonProps {
  symbol: string;
  delay: number;
  size: number;
  x: number;
  y: number;
}

const PlayStationButton = ({ symbol, delay, size, x, y }: PlayStationButtonProps) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ 
        opacity: 0,
        scale: 0,
        rotate: -180
      }}
      animate={{ 
        opacity: 1,
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 360],
        y: [0, -30, 20, -10, 0],
        x: [0, 20, -15, 25, 0]
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { 
          duration: 8, 
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: { 
          duration: 12, 
          delay: delay + 2,
          repeat: Infinity,
          ease: "linear"
        },
        y: { 
          duration: 10, 
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        x: { 
          duration: 8, 
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <span className="text-gray-400 font-bold text-2xl select-none">
        {symbol}
      </span>
    </motion.div>
  );
};

export const PlayStationButtonsBackground = () => {
  const buttons = [
    { symbol: "△", delay: 0, size: 60, x: 15, y: 10 },
    { symbol: "○", delay: 0.2, size: 50, x: 80, y: 5 },
    { symbol: "✕", delay: 0.4, size: 55, x: 25, y: 80 },
    { symbol: "□", delay: 0.6, size: 45, x: 75, y: 85 },
    { symbol: "△", delay: 0.8, size: 40, x: 60, y: 30 },
    { symbol: "○", delay: 1.0, size: 65, x: 20, y: 50 },
    { symbol: "✕", delay: 1.2, size: 35, x: 85, y: 60 },
    { symbol: "□", delay: 1.4, size: 55, x: 5, y: 25 },
    { symbol: "△", delay: 1.6, size: 45, x: 50, y: 5 },
    { symbol: "○", delay: 1.8, size: 40, x: 70, y: 70 },
    { symbol: "✕", delay: 2.0, size: 50, x: 35, y: 20 },
    { symbol: "□", delay: 2.2, size: 60, x: 90, y: 40 },
    { symbol: "△", delay: 2.4, size: 30, x: 10, y: 65 },
    { symbol: "○", delay: 2.6, size: 55, x: 65, y: 45 },
    { symbol: "✕", delay: 2.8, size: 40, x: 40, y: 75 },
  ];

  return (
    <div className="opacity-20 fixed inset-0 pointer-events-none overflow-hidden z-50">
      {buttons.map((button, index) => (
        <PlayStationButton
          key={index}
          symbol={button.symbol}
          delay={button.delay}
          size={button.size}
          x={button.x}
          y={button.y}
        />
      ))}
    </div>
  );
};
