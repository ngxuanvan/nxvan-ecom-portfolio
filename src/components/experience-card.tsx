"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import type { portfolio } from "@/data/portfolio";

type ExperienceCardProps = {
  experience: typeof portfolio.experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-48px_rgba(15,27,51,0.36)] transition-colors sm:p-8"
      initial={reduceMotion ? false : { opacity: 0, x: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              boxShadow: "0 28px 80px -50px rgba(15,27,51,0.5)",
            }
      }
      transition={{ type: "spring", stiffness: 95, damping: 23 }}
    >
      <motion.div
        className="absolute bottom-8 left-8 top-8 hidden w-px origin-top bg-blue-100 sm:block"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={reduceMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
      />
      <div className="relative sm:pl-12">
        <motion.div
          className="absolute left-[-3.25rem] top-1 hidden h-4 w-4 rounded-full border-4 border-white bg-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.25)] sm:block"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.35 }}
        />
        <p className="text-sm font-semibold tracking-normal text-[#2563EB] proportional-nums">
          {experience.time}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">{experience.role}</h3>
        <p className="mt-2 text-base font-medium text-slate-600">{experience.company}</p>
        <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
          <Image
            src={experience.image.src}
            alt={experience.image.alt}
            width={980}
            height={640}
            className="h-auto w-full"
          />
        </div>
        <ul className="mt-8 grid gap-4">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-slate-700">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2563EB]" />
              <span className="leading-7">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
