"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  Search,
  ShoppingBag,
} from "lucide-react";
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

const heroHighlightPattern = /(Thương mại điện tử|E-commerce|SEO)/g;
const heroHighlightKeywords = new Set([
  "Thương mại điện tử",
  "SEO",
  "E-commerce",
]);

function HighlightHeroKeywords({ text }: { text: string }) {
  return text.split(heroHighlightPattern).map((part, index) =>
    heroHighlightKeywords.has(part) ? (
      <span key={`${part}-${index}`} className="font-semibold text-[#2563EB]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

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
          <HighlightHeroKeywords text={description} />
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
          className="absolute -left-4 top-14 hidden h-24 w-24 rounded-[1.5rem] border border-blue-100 bg-blue-50/60 md:block"
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
        <motion.div
          aria-hidden="true"
          className="absolute -right-4 bottom-36 hidden h-20 w-20 rounded-full border border-blue-200/70 bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_65%)] md:block"
          animate={
            reduceMotion ? undefined : { y: [0, 4, 0], scale: [1, 1.03, 1] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="group/hero-image relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white/82 p-3 shadow-[0_38px_110px_-62px_rgba(15,27,51,0.58)] backdrop-blur transition duration-500 hover:shadow-[0_42px_120px_-62px_rgba(15,27,51,0.64)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px)] bg-[size:36px_36px]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(37,99,235,0.12),transparent_34%),radial-gradient(circle_at_86%_78%,rgba(37,99,235,0.08),transparent_24%)]"
          />
          <div
            aria-hidden="true"
            className="hero-orbit-ring absolute left-1/2 top-[21%] h-56 w-56 -translate-x-1/2 rounded-full border border-blue-200/45"
          >
            <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-[#2563EB]/55 shadow-[0_0_18px_rgba(37,99,235,0.22)]" />
          </div>
          <span
            aria-hidden="true"
            className="absolute left-[24%] top-[28%] h-px w-24 origin-left rotate-[14deg] bg-gradient-to-r from-[#2563EB]/20 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute right-[18%] top-[42%] h-px w-20 origin-right -rotate-[20deg] bg-gradient-to-l from-[#2563EB]/16 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[25%] left-[22%] h-px w-20 origin-left -rotate-[12deg] bg-gradient-to-r from-[#2563EB]/16 to-transparent"
          />
          {[
            "left-[20%] top-[20%]",
            "right-[24%] top-[30%]",
            "left-[15%] bottom-[33%]",
            "right-[18%] bottom-[26%]",
            "left-[48%] top-[13%]",
          ].map((position, index) => (
            <motion.span
              key={position}
              aria-hidden="true"
              className={`absolute h-1.5 w-1.5 rounded-full bg-[#2563EB]/35 ${position}`}
              animate={reduceMotion ? undefined : { y: [0, index % 2 ? -4 : 4, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <span
            aria-hidden="true"
            className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#2563EB]/35"
          />
          <span
            aria-hidden="true"
            className="absolute right-5 top-5 h-8 w-8 border-r border-t border-[#2563EB]/35"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-[#2563EB]/35"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#2563EB]/35"
          />
          <motion.div
            className="absolute left-1/2 top-[7%] z-20 hidden -translate-x-1/2 rounded-2xl border border-blue-100 bg-white/88 px-4 py-2.5 shadow-[0_18px_50px_-38px_rgba(15,27,51,0.42)] backdrop-blur md:block"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: [0, -3, 0] }}
            transition={{
              opacity: { type: "spring", stiffness: 120, damping: 22, delay: 0.45 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <p className="text-xs font-medium text-slate-500">Focus</p>
            <p className="mt-0.5 text-sm font-semibold text-[#0F1B33]">
              SEO · E-commerce
            </p>
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-[16%] z-10 w-[78%] -translate-x-1/2 overflow-hidden rounded-[1.85rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff,#ffffff)] shadow-[0_28px_76px_-54px_rgba(15,27,51,0.5)]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 24, delay: 0.34 }}
          >
            <div
              aria-hidden="true"
              className="hero-scan-light absolute inset-x-[-35%] top-0 z-10 h-20 bg-gradient-to-b from-transparent via-white/55 to-transparent"
            />
            <Image
              src={profileImage}
              alt="Ảnh hồ sơ minh họa của Nguyễn Xuân Văn"
              width={720}
              height={840}
              priority
              className="aspect-[4/5] w-full object-contain object-top transition duration-700 group-hover/hero-image:scale-[1.02]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[8%] left-8 z-20 hidden rounded-2xl border border-blue-100 bg-white/88 px-4 py-2.5 shadow-[0_18px_50px_-38px_rgba(15,27,51,0.42)] backdrop-blur md:block"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: [0, 3, 0] }}
            transition={{
              opacity: { type: "spring", stiffness: 120, damping: 22, delay: 0.58 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <p className="text-xs font-medium text-slate-500">
              Google Analytics
            </p>
            <p className="mt-0.5 text-sm font-semibold text-[#2563EB]">
              Tracking ready
            </p>
          </motion.div>
          <motion.div
            className="absolute bottom-[8%] right-8 z-20 hidden rounded-2xl border border-blue-100 bg-white/88 px-4 py-2.5 shadow-[0_18px_50px_-38px_rgba(15,27,51,0.42)] backdrop-blur md:block"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: [0, -3, 0] }}
            transition={{
              opacity: { type: "spring", stiffness: 120, damping: 22, delay: 0.66 },
              y: { duration: 6.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <p className="text-xs font-medium text-slate-500">
              Google Search Console
            </p>
            <p className="mt-0.5 text-sm font-semibold text-[#2563EB]">
              Search insights
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
