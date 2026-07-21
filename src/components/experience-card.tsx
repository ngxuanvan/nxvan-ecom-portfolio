"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { ExperienceGallery } from "@/components/experience-gallery";
import type { portfolio } from "@/data/portfolio";

type ExperienceCardProps = {
  experience: typeof portfolio.experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const reduceMotion = useReducedMotion();
  const kpis = [
    { value: "5", label: "nhóm từ khóa" },
    { value: "25", label: "bài SEO" },
    { value: "35", label: "sản phẩm" },
  ];

  return (
    <motion.article
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_76px_-52px_rgba(15,27,51,0.38)] transition-colors sm:p-1"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
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
      <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <div className="bg-slate-50 p-5 sm:rounded-[1.75rem] lg:p-6">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_54px_-46px_rgba(15,27,51,0.38)]">
            <Image
              src={experience.image.src}
              alt={experience.image.alt}
              width={980}
              height={640}
              className="h-auto w-full transition duration-700 hover:scale-[1.015]"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                className="rounded-2xl border border-slate-200 bg-white px-3 py-3"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                  delay: reduceMotion ? 0 : 0.08 * index,
                }}
              >
                <p className="text-2xl font-semibold tracking-normal text-[#0F1B33] proportional-nums">
                  {kpi.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-4 text-slate-500">
                  {kpi.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative p-6 sm:p-8 lg:p-10">
          <motion.div
            className="absolute bottom-10 left-10 top-11 hidden w-px origin-top bg-blue-100 md:block"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
          <div className="md:pl-8">
            <motion.div
              className="absolute left-[2.06rem] top-10 hidden h-4 w-4 rounded-full border-4 border-white bg-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.25)] md:block"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.28,
              }}
            />
            <p className="text-sm font-semibold tracking-normal text-[#2563EB] proportional-nums">
              {experience.time}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1B33]">
              {experience.role}
            </h3>
            <p className="mt-2 max-w-2xl text-base font-medium leading-7 text-slate-600">
              {experience.company}
            </p>
            <ul className="mt-7 grid gap-3">
              {experience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 rounded-2xl border border-transparent px-1 py-1 text-slate-700 transition hover:border-blue-100 hover:bg-blue-50/35"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                  <span className="text-pretty leading-7">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ExperienceGallery
        images={experience.evidenceImages}
        intro={experience.evidenceIntro}
      />
    </motion.article>
  );
}
