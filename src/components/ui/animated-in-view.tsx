"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedInViewProps = Omit<ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
};

export function AnimatedInView({
  children,
  className,
  delay = 0,
  y = 24,
  scale = 1,
  ...props
}: AnimatedInViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, scale: scale < 1 ? scale : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
