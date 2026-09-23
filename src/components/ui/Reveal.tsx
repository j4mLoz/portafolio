// components/ui/Reveal.tsx
"use client";

import { motion } from "motion/react";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
