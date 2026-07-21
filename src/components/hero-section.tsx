"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDownToLine, ArrowRight, BarChart3, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  cvPath: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 23 },
  },
};

export function HeroSection({
  name,
  title,
  description,
  profileImage,
  cvPath,
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="trang-dau"
      className="relative mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl items-center gap-12 overflow-hidden px-4 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-8 -z-10 h-[72%] rounded-[3rem] bg-[linear-gradient(120deg,rgba(37,99,235,0.08),transparent_34%),linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,0))]"
      />
      <motion.div
        className="max-w-3xl"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
      >
        <motion.p
          variants={reduceMotion ? undefined : item}
          className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-[#2563EB] shadow-[0_14px_40px_-30px_rgba(37,99,235,0.55)]"
        >
          {title}
        </motion.p>
        <motion.h1
          variants={reduceMotion ? undefined : item}
          className="text-balance max-w-4xl text-6xl font-semibold leading-[0.94] tracking-tight text-[#0F1B33] sm:text-7xl lg:text-8xl"
        >
          {name}
        </motion.h1>
        <motion.p
          variants={reduceMotion ? undefined : item}
          className="text-pretty mt-7 max-w-2xl text-lg leading-8 text-slate-600"
        >
          {description}
        </motion.p>
        <motion.div
          variants={reduceMotion ? undefined : item}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#du-an">
              Xem dự án
              <ArrowRight
                aria-hidden="true"
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={cvPath} download>
              <ArrowDownToLine aria-hidden="true" size={18} strokeWidth={1.8} />
              Tải CV
            </a>
          </Button>
        </motion.div>
        <motion.div
          variants={reduceMotion ? undefined : item}
          className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-slate-200 pt-6"
        >
          {[
            { label: "SEO", icon: Search },
            { label: "E-commerce", icon: ShoppingBag },
            { label: "Analytics", icon: BarChart3 },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <Icon aria-hidden="true" size={17} strokeWidth={1.8} className="text-[#2563EB]" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-[540px] lg:justify-self-end"
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 95, damping: 24, delay: 0.28 }}
      >
        <motion.div
          className="absolute -left-4 top-10 hidden h-36 w-36 rounded-[2rem] border border-blue-100 bg-blue-50/80 md:block"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  x: [0, 4, 0],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-[0_34px_100px_-60px_rgba(15,27,51,0.55)]">
          <Image
            src={profileImage}
            alt="Ảnh hồ sơ minh họa của Nguyễn Xuân Văn"
            width={720}
            height={840}
            priority
            className="h-auto w-full"
          />
        </div>
        <motion.div
          className="absolute -bottom-6 right-4 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-[0_22px_70px_-42px_rgba(15,27,51,0.38)]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 110, damping: 22, delay: 0.5 }}
        >
          <p className="text-sm font-medium tracking-normal text-slate-500">GPA</p>
          <p className="mt-1 text-2xl font-semibold tracking-normal text-[#0F1B33] proportional-nums">
            3.71 / 4.00
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
