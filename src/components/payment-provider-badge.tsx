"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import type { PaymentProvider } from "@/data/portfolio";

type PaymentProviderBadgeProps = {
  provider: PaymentProvider;
};

export function PaymentProviderBadge({ provider }: PaymentProviderBadgeProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex h-12 min-w-[118px] items-center justify-center rounded-[14px] border border-slate-200 bg-white px-4 shadow-[0_14px_34px_-30px_rgba(15,27,51,0.34)] transition-colors hover:border-[#2563EB]/30"
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -2,
              boxShadow: "0 18px 42px -32px rgba(15,27,51,0.45)",
            }
      }
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      aria-label={provider.name}
      title={provider.name}
    >
      <Image
        src={provider.logo.src}
        alt={provider.logo.alt}
        width={provider.logo.width}
        height={provider.logo.height}
        className="max-h-7 max-w-28 object-contain"
      />
    </motion.div>
  );
}
