"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import type { EvidenceImage } from "@/data/portfolio";

type ExperienceGalleryProps = {
  images: readonly EvidenceImage[];
  intro: string;
};

function EvidenceCard({
  image,
  index,
  featured = false,
  onOpen,
}: {
  image: EvidenceImage;
  index: number;
  featured?: boolean;
  onOpen: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      className="group overflow-hidden rounded-[1.65rem] border border-slate-200 bg-white text-left shadow-[0_20px_64px_-52px_rgba(15,27,51,0.48)] transition duration-300 hover:border-[#2563EB]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
      aria-label={`Mở ảnh: ${image.caption}`}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: featured ? -4 : -3,
              boxShadow: "0 26px 70px -48px rgba(15,27,51,0.55)",
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 230, damping: 24 }}
    >
      <span
        className={`relative block overflow-hidden bg-slate-50 ${
          featured ? "aspect-[16/8.8]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 1040px, 100vw"
              : "(min-width: 1024px) 340px, 100vw"
          }
          className="object-contain p-3 transition duration-500 group-hover:scale-[1.012]"
        />
      </span>
      <span
        className={`block border-t border-slate-100 px-4 font-semibold leading-6 text-[#0F1B33] ${
          featured ? "py-4 text-base" : "py-3 text-sm"
        }`}
      >
        {image.caption}
      </span>
    </motion.button>
  );
}

export function ExperienceGallery({ images, intro }: ExperienceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const reduceMotion = useReducedMotion();
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const activePosition = activeIndex === null ? 0 : activeIndex + 1;

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

  const featuredImage = images[0];
  const supportingImages = images.slice(1);
  const lightbox = (
    <AnimatePresence>
      {activeImage ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#071225]/92 px-4 py-6"
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
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <h3 id={titleId} className="text-base font-semibold">
                  {activeImage.caption}
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Ảnh {activePosition} / {images.length}
                </p>
              </div>
              <button
                type="button"
                aria-label="Đóng ảnh minh chứng"
                onClick={() => setActiveIndex(null)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
    <section className="border-t border-slate-200 px-5 py-6 sm:px-6 sm:py-7 lg:px-8">
      <div className="mb-5 max-w-3xl">
        <p className="text-sm font-semibold text-[#2563EB]">
          Minh chứng công việc
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          {intro}
        </p>
      </div>

      <div className="grid gap-4">
        <EvidenceCard
          image={featuredImage}
          index={0}
          featured
          onOpen={setActiveIndex}
        />

        {supportingImages.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {supportingImages.map((image, index) => (
              <EvidenceCard
                key={image.src}
                image={image}
                index={index + 1}
                onOpen={setActiveIndex}
              />
            ))}
          </div>
        ) : null}
      </div>

      {mounted ? createPortal(lightbox, document.body) : null}
    </section>
  );
}
