"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import type { PortfolioImage } from "@/data/portfolio";

export type DetailShowcaseImage = PortfolioImage & {
  title?: string;
  caption: string;
  description?: string;
};

type DetailImageShowcaseProps = {
  images: readonly DetailShowcaseImage[];
  variant?: "featured" | "two-up" | "wide";
};

function frameClass(variant: NonNullable<DetailImageShowcaseProps["variant"]>, index: number) {
  if (variant === "wide") {
    return "aspect-[16/9]";
  }

  if (variant === "two-up") {
    return "aspect-[16/10]";
  }

  return index === 0 ? "aspect-[16/8.6] md:col-span-2" : "aspect-[16/10]";
}

function gridClass(variant: NonNullable<DetailImageShowcaseProps["variant"]>) {
  if (variant === "wide") {
    return "grid gap-5";
  }

  return "grid gap-5 md:grid-cols-2";
}

export function DetailImageShowcase({
  images,
  variant = "featured",
}: DetailImageShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const reduceMotion = useReducedMotion();
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setMounted(true), 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

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

  if (images.length === 0) {
    return null;
  }

  const lightbox = (
    <AnimatePresence>
      {activeImage ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#071225]/92 px-4 py-6 backdrop-blur-sm"
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
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 130, damping: 25 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4 text-white">
              <div>
                <h3 id={titleId} className="text-base font-semibold">
                  {activeImage.title ?? activeImage.caption}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-blue-100">
                  {activeImage.description ?? activeImage.caption}
                </p>
              </div>
              <button
                type="button"
                aria-label="Đóng ảnh"
                onClick={() => setActiveIndex(null)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X aria-hidden="true" size={20} strokeWidth={1.8} />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] bg-white">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain p-3 sm:p-5"
                priority
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
                  <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} />
                </button>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <div className={gridClass(variant)}>
        {images.map((image, index) => {
          const featured =
            variant === "featured" && index === 0 ? "md:col-span-2" : "";

          return (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Mở ảnh ${image.title ?? image.caption}`}
              className={`group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-left shadow-[0_22px_70px_-52px_rgba(15,27,51,0.42)] transition duration-300 hover:border-[#2563EB]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${featured}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                delay: reduceMotion ? 0 : index * 0.05,
              }}
            >
              <span className={`relative block bg-slate-50 ${frameClass(variant, index)}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    featured
                      ? "(min-width: 1024px) 76vw, 100vw"
                      : "(min-width: 768px) 44vw, 100vw"
                  }
                  loading="lazy"
                  className="object-contain p-3 transition duration-700 group-hover:scale-[1.018]"
                />
                <span className="pointer-events-none absolute right-4 top-4 grid h-10 w-10 translate-y-1 place-items-center rounded-full border border-white/70 bg-white/85 text-[#0F1B33] opacity-0 shadow-[0_16px_34px_-24px_rgba(15,27,51,0.45)] backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 aria-hidden="true" size={17} strokeWidth={1.8} />
                </span>
              </span>
              <span className="block border-t border-slate-100 px-5 py-4">
                <span className="block text-sm font-semibold text-[#0F1B33]">
                  {image.title ?? image.caption}
                </span>
                {image.description ? (
                  <span className="text-pretty mt-2 block text-sm leading-6 text-slate-500">
                    {image.description}
                  </span>
                ) : null}
              </span>
            </motion.button>
          );
        })}
      </div>

      {mounted ? createPortal(lightbox, document.body) : null}
    </>
  );
}
