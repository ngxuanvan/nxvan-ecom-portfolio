"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function MotionSection({ id, className, children }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 90, damping: 22 }}
    >
      {children}
    </motion.section>
  );
}
