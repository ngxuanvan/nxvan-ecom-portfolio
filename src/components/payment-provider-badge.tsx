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
      className="flex h-11 min-w-0 flex-1 items-center justify-center rounded-[14px] border border-slate-200 bg-white px-2 shadow-[0_14px_34px_-30px_rgba(15,27,51,0.34)] transition-colors hover:border-[#2563EB]/30 sm:h-12 sm:min-w-[118px] sm:flex-none sm:px-4"
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
        className="max-h-6 max-w-full object-contain sm:max-h-7 sm:max-w-28"
      />
    </motion.div>
  );
}
