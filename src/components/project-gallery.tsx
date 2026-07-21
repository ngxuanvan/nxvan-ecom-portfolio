"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";

import type { PortfolioImage } from "@/data/portfolio";

type ProjectGalleryProps = {
  images: PortfolioImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();
  const reduceMotion = useReducedMotion();
  const hasImages = images.length > 0;
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const activePosition = activeIndex === null ? 0 : activeIndex + 1;

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

  if (!hasImages) {
    return (
      <div className="grid aspect-[16/10] place-items-center rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#2563EB] shadow-[0_16px_40px_-30px_rgba(15,27,51,0.42)]">
            <ImageIcon aria-hidden="true" size={24} strokeWidth={1.8} />
          </div>
          <p className="mt-5 text-sm font-semibold text-[#0F1B33]">
            Chưa có hình ảnh dự án
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Thêm ảnh vào dữ liệu dự án để hiển thị thư viện.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-[0_18px_56px_-44px_rgba(15,27,51,0.42)] transition duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
              index === 0 && images.length > 2 ? "sm:col-span-2" : ""
            }`}
            aria-label={`Mở ${image.alt}`}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                    boxShadow: "0 22px 60px -42px rgba(15,27,51,0.5)",
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <span className="relative block aspect-[16/10]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0 && images.length > 2
                    ? "(min-width: 1024px) 58vw, 100vw"
                    : "(min-width: 640px) 45vw, 100vw"
                }
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
              />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[#071225]/90 px-4 py-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative flex h-full w-full max-w-6xl flex-col"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 120, damping: 24 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4 text-white">
                <div>
                  <h3 id={titleId} className="text-base font-semibold">
                    {projectTitle}
                  </h3>
                  <p className="mt-1 text-sm text-blue-100">
                    Ảnh {activePosition} / {images.length}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Đóng thư viện ảnh"
                  onClick={() => setActiveIndex(null)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
                  className="object-contain"
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
    </>
  );
}
