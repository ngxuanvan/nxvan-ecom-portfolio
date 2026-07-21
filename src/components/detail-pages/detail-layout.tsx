import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { DetailReveal } from "@/components/detail-pages/detail-motion";
import type { PortfolioImage } from "@/data/portfolio";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type DetailHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  eyebrow: string;
  time?: string;
  role?: string;
  intro: string;
  image?: PortfolioImage;
};

export function DetailPageFrame({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-white text-[#0F1B33]">
      {children}
    </main>
  );
}

export function DetailHero({
  breadcrumbs,
  title,
  eyebrow,
  time,
  role,
  intro,
  image,
}: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc,#ffffff)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(37,99,235,0.11),transparent_34%),linear-gradient(rgba(15,27,51,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,27,51,0.035)_1px,transparent_1px)] bg-[length:auto,36px_36px,36px_36px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500"
        >
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#0F1B33]">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 ? (
                <span aria-hidden="true" className="text-slate-300">
                  /
                </span>
              ) : null}
            </span>
          ))}
        </nav>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <DetailReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              {eyebrow}
            </p>
            <h1 className="text-balance mt-5 text-5xl font-semibold leading-[0.98] tracking-tight text-[#0F1B33] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium tracking-normal text-slate-600 proportional-nums">
              {time ? (
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                  {time}
                </span>
              ) : null}
              {role ? (
                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[#2563EB]">
                  Vai trò: {role}
                </span>
              ) : null}
            </div>
            <p className="text-pretty mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              {intro}
            </p>
          </DetailReveal>

          {image ? (
            <DetailReveal className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_28px_86px_-58px_rgba(15,27,51,0.52)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-slate-50">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </DetailReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function DetailSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <DetailReveal>
      <section id={id} className="border-t border-slate-200 pt-10">
        <div className="grid gap-7 lg:grid-cols-[0.36fr_1.64fr]">
          <div>
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-balance mt-3 text-3xl font-semibold tracking-tight text-[#0F1B33] sm:text-4xl">
              {title}
            </h2>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </DetailReveal>
  );
}

export function BackToPortfolio() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0F1B33] shadow-[0_18px_50px_-38px_rgba(15,27,51,0.42)] transition hover:-translate-y-0.5 hover:border-[#2563EB]/35 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
      >
        <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.8} />
        Back to Portfolio
      </Link>
    </div>
  );
}
