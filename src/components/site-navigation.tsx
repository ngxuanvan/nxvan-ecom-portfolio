"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { NavItem } from "@/data/portfolio";

type SiteNavigationProps = {
  name: string;
  nav: NavItem[];
  cvPath: string;
};

export function SiteNavigation({ name, nav, cvPath }: SiteNavigationProps) {
  const [activeHref, setActiveHref] = useState(nav[0]?.href ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 16));
  }, [scrollY]);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const activationY = 132;
      const current = nav.reduce<NavItem | undefined>((activeItem, item) => {
        const section = document.getElementById(item.href.replace("#", ""));
        if (!section) {
          return activeItem;
        }

        const rect = section.getBoundingClientRect();
        return rect.top <= activationY ? item : activeItem;
      }, nav[0]);

      if (current) {
        setActiveHref(current.href);
      }
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [nav]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <motion.header
      className={`sticky top-0 z-30 border-b transition-[background,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-slate-200/80 bg-white/82 shadow-[0_16px_50px_-42px_rgba(15,27,51,0.45)] backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 110, damping: 24 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#trang-dau"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-tight text-[#0F1B33] transition hover:text-[#2563EB] sm:text-base"
        >
          {name}
        </a>

        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 text-sm font-medium text-slate-600 shadow-[0_12px_40px_-34px_rgba(15,27,51,0.32)] lg:flex"
        >
          {nav.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-full px-3.5 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${
                  isActive ? "text-[#0F1B33]" : "hover:text-[#2563EB]"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 rounded-full bg-blue-50"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                ) : null}
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#2563EB] transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <a href={cvPath} download>
              <ArrowDownToLine aria-hidden="true" size={16} strokeWidth={1.8} />
              Tải CV
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-[#0F1B33] shadow-[0_12px_32px_-26px_rgba(15,27,51,0.35)] transition hover:border-[#2563EB]/40 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] lg:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" size={18} strokeWidth={1.8} />
          ) : (
            <Menu aria-hidden="true" size={18} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="border-t border-slate-200/70 bg-white/94 px-4 pb-5 pt-2 shadow-[0_28px_70px_-55px_rgba(15,27,51,0.55)] backdrop-blur-xl lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 170, damping: 28 }}
          >
            <nav aria-label="Điều hướng di động" className="mx-auto grid max-w-7xl gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    activeHref === item.href
                      ? "bg-blue-50 text-[#2563EB]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#2563EB]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-3 w-full justify-between">
                <a href={cvPath} download onClick={closeMenu}>
                  Tải CV
                  <ArrowDownToLine aria-hidden="true" size={16} strokeWidth={1.8} />
                </a>
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
