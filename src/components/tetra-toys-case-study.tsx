"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";

import type {
  CaseStudyImage,
  CaseStudySection,
  ProjectCaseStudy,
} from "@/data/portfolio";

type TetraToysCaseStudyProps = {
  caseStudy: ProjectCaseStudy;
  projectTitle: string;
};

function getSectionGridClass(section: CaseStudySection) {
  if (section.layout === "website") {
    return "grid gap-4 md:grid-cols-3";
  }

  if (section.layout === "kpi") {
    return "grid gap-5 lg:grid-cols-2";
  }

  if (section.layout === "wide") {
    return "grid gap-5";
  }

  return "grid gap-5 md:grid-cols-2";
}

function getImageFrameClass(section: CaseStudySection, imageIndex: number) {
  if (section.layout === "kpi") {
    return imageIndex === 0
      ? "aspect-[16/9] lg:col-span-2"
      : "aspect-[16/9]";
  }

  if (section.layout === "wide") {
    return "aspect-[16/9]";
  }

  if (section.layout === "website") {
    return "aspect-[4/3]";
  }

  return "aspect-[16/11]";
}

function imageSizes(section: CaseStudySection, imageIndex: number) {
  if (section.layout === "kpi" && imageIndex === 0) {
    return "(min-width: 1024px) 58vw, 100vw";
  }

  if (section.layout === "website") {
    return "(min-width: 768px) 30vw, 100vw";
  }

  if (section.layout === "wide") {
    return "(min-width: 1024px) 70vw, 100vw";
  }

  return "(min-width: 768px) 44vw, 100vw";
}

function CaseStudyImageCard({
  image,
  imageIndex,
  section,
  onOpen,
}: {
  image: CaseStudyImage;
  imageIndex: number;
  section: CaseStudySection;
  onOpen: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`Mở ảnh ${image.title ?? image.alt}`}
      className={`group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-left shadow-[0_22px_70px_-50px_rgba(15,27,51,0.42)] transition duration-300 hover:border-[#2563EB]/35 hover:shadow-[0_28px_80px_-52px_rgba(15,27,51,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
        section.layout === "kpi" && imageIndex === 0 ? "lg:col-span-2" : ""
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 24,
        delay: reduceMotion ? 0 : imageIndex * 0.06,
      }}
    >
      <span
        className={`relative block w-full bg-slate-50 ${getImageFrameClass(
          section,
          imageIndex,
        ).replace(" lg:col-span-2", "")}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={imageSizes(section, imageIndex)}
          loading="lazy"
          className="object-contain p-2 transition duration-700 group-hover:scale-[1.025]"
        />
        <span className="pointer-events-none absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full border border-white/70 bg-white/85 text-[#0F1B33] opacity-0 shadow-[0_16px_34px_-24px_rgba(15,27,51,0.45)] backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Maximize2 aria-hidden="true" size={17} strokeWidth={1.8} />
        </span>
      </span>
      <span className="block border-t border-slate-100 px-5 py-4">
        {image.title ? (
          <span className="block text-sm font-semibold text-[#0F1B33]">
            {image.title}
          </span>
        ) : null}
        <span className="text-pretty mt-1 block text-sm leading-6 text-slate-600">
          {image.caption}
        </span>
      </span>
    </motion.button>
  );
}

export function TetraToysCaseStudy({
  caseStudy,
  projectTitle,
}: TetraToysCaseStudyProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const images = useMemo(
    () => [
      caseStudy.hero,
      ...caseStudy.sections.flatMap((section) => section.images),
    ],
    [caseStudy],
  );
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + images.length) % images.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <div className="mt-10 space-y-14">
      <motion.button
        type="button"
        onClick={() => setActiveIndex(0)}
        aria-label={`Mở ảnh ${caseStudy.hero.title ?? caseStudy.hero.alt}`}
        className="group w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-[0_32px_90px_-58px_rgba(15,27,51,0.55)] transition hover:border-[#2563EB]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.99 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        whileHover={reduceMotion ? undefined : { y: -3 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 110, damping: 24 }}
      >
        <span className="relative block aspect-[16/9] bg-slate-50">
          <Image
            src={caseStudy.hero.src}
            alt={caseStudy.hero.alt}
            fill
            sizes="(min-width: 1024px) 72vw, 100vw"
            loading="lazy"
            className="object-contain p-3 transition duration-700 group-hover:scale-[1.015]"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1B33]/86 via-[#0F1B33]/32 to-transparent px-6 pb-6 pt-24 text-white sm:px-8 sm:pb-8">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
              Hero
            </span>
            <span className="mt-2 block text-2xl font-semibold tracking-tight sm:text-3xl">
              {caseStudy.hero.title}
            </span>
            <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/82 sm:text-base">
              {caseStudy.hero.caption}
            </span>
          </span>
        </span>
      </motion.button>

      {caseStudy.sections.map((section, sectionIndex) => {
        const firstImageIndex =
          1 +
          caseStudy.sections
            .slice(0, sectionIndex)
            .reduce((total, item) => total + item.images.length, 0);

        return (
          <motion.section
            key={section.id}
            className="space-y-6"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 24,
              delay: reduceMotion ? 0 : 0.04,
            }}
          >
            <div
              className={`flex flex-col gap-4 border-t border-slate-200 pt-8 ${
                sectionIndex % 2 === 0
                  ? "lg:flex-row lg:items-end lg:justify-between"
                  : "lg:flex-row-reverse lg:items-end lg:justify-between"
              }`}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                  {section.eyebrow}
                </p>
                <h4 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F1B33] sm:text-4xl">
                  {section.title}
                </h4>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600 lg:text-right">
                {section.description}
              </p>
            </div>

            <div className={getSectionGridClass(section)}>
              {section.images.map((image, imageIndex) => (
                <CaseStudyImageCard
                  key={`${section.id}-${image.src}`}
                  image={image}
                  imageIndex={imageIndex}
                  section={section}
                  onOpen={() => setActiveIndex(firstImageIndex + imageIndex)}
                />
              ))}
            </div>
          </motion.section>
        );
      })}

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[#071225]/92 px-4 py-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative flex h-full w-full max-w-7xl flex-col"
              initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 120, damping: 24 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4 text-white">
                <div>
                  <h3 id={titleId} className="text-base font-semibold">
                    {activeImage.title ?? projectTitle}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-100">
                    {activeImage.caption}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Đóng ảnh dự án"
                  onClick={() => setActiveIndex(null)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <X aria-hidden="true" size={20} strokeWidth={1.8} />
                </button>
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] bg-white/5">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              {images.length > 1 ? (
                <div className="mt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    aria-label="Xem ảnh trước"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === null
                          ? current
                          : (current - 1 + images.length) % images.length,
                      )
                    }
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.8} />
                  </button>
                  <button
                    type="button"
                    aria-label="Xem ảnh tiếp theo"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === null ? current : (current + 1) % images.length,
                      )
                    }
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ChevronRight
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.8}
                    />
                  </button>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
