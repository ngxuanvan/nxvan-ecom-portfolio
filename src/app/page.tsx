import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";

import { MotionSection } from "@/components/motion-section";
import { ProjectShowcase } from "@/components/project-showcase";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm font-medium uppercase text-[#2563EB]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold leading-none tracking-tight text-[#0F1B33] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const { person } = portfolio;

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-white text-[#0F1B33]">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#trang-dau"
            className="text-sm font-semibold tracking-tight text-[#0F1B33] sm:text-base"
          >
            {person.name}
          </a>
          <nav
            aria-label="Điều hướng chính"
            className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex"
          >
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href={person.cvPath} download>
              <ArrowDownToLine aria-hidden="true" size={16} strokeWidth={1.8} />
              Tải CV
            </a>
          </Button>
        </div>
      </header>

      <section
        id="trang-dau"
        className="mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8"
      >
        <div>
          <p className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2563EB]">
            {person.title}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-tight text-[#0F1B33] md:text-7xl">
            {person.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            {portfolio.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#du-an">
                Xem dự án
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={person.cvPath} download>
                <ArrowDownToLine
                  aria-hidden="true"
                  size={18}
                  strokeWidth={1.8}
                />
                Tải CV
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-4 top-10 hidden h-36 w-36 rounded-[2rem] border border-blue-100 bg-blue-50 md:block" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-[0_28px_90px_-55px_rgba(15,27,51,0.45)]">
            <Image
              src={person.profileImage}
              alt="Ảnh hồ sơ minh họa của Nguyễn Xuân Văn"
              width={720}
              height={840}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_22px_70px_-42px_rgba(15,27,51,0.38)]">
            <p className="font-mono text-sm text-slate-500">GPA</p>
            <p className="mt-1 text-3xl font-semibold text-[#0F1B33]">3.71/4</p>
          </div>
        </div>
      </section>

      <MotionSection
        id="gioi-thieu"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="01" title={portfolio.about.title} />
          <div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {portfolio.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-38px_rgba(15,27,51,0.35)]"
                >
                  <p className="font-mono text-2xl font-semibold text-[#0F1B33]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="kinh-nghiem"
        className="border-y border-slate-200 bg-slate-50 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <SectionHeading eyebrow="02" title="Kinh nghiệm" />
          <article className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-48px_rgba(15,27,51,0.36)] sm:p-8">
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-blue-100 sm:block" />
            <div className="relative sm:pl-12">
              <div className="absolute left-[-3.25rem] top-1 hidden h-4 w-4 rounded-full border-4 border-white bg-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.25)] sm:block" />
              <p className="text-sm font-medium text-[#2563EB]">
                {portfolio.experience.time}
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                {portfolio.experience.role}
              </h3>
              <p className="mt-2 text-base font-medium text-slate-600">
                {portfolio.experience.company}
              </p>
              <ul className="mt-8 grid gap-4">
                {portfolio.experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2563EB]" />
                    <span className="leading-7">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </MotionSection>

      <MotionSection
        id="du-an"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow="03" title="Dự án nổi bật" />
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Các dự án tập trung vào vận hành E-commerce, SEO, phân tích hiệu quả
            và phát triển website theo nhu cầu kinh doanh cụ thể.
          </p>
        </div>
        <ProjectShowcase projects={[...portfolio.projects]} />
      </MotionSection>

      <MotionSection id="ky-nang" className="bg-[#0F1B33] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-sm font-medium uppercase text-blue-200">
                04
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-none tracking-tight md:text-6xl">
                Kỹ năng
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {portfolio.skills.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_70px_-55px_rgba(37,99,235,0.45)]"
                >
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <ul className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="hoc-van"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="05" title="Học vấn" />
          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.education.map((item) => (
              <article
                key={item.school}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_64px_-48px_rgba(15,27,51,0.38)]"
              >
                <GraduationCap
                  aria-hidden="true"
                  size={30}
                  strokeWidth={1.8}
                  className="text-[#2563EB]"
                />
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-4 text-sm font-medium text-[#2563EB]">
                  {item.time}
                </p>
                <p className="mt-5 text-slate-600">{item.major}</p>
                <p className="mt-2 font-mono text-slate-700">{item.gpa}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="lien-he" className="border-t border-slate-200 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="font-mono text-sm font-medium uppercase text-[#2563EB]">
              06
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-tight md:text-6xl">
              Cùng trao đổi về cơ hội E-commerce & Digital Marketing
            </h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${person.email}`}>
                  <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
                  Gửi email
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={person.cvPath} download>
                  <ArrowDownToLine
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.8}
                  />
                  Tải CV
                </a>
              </Button>
            </div>
          </div>
          <address className="not-italic">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_70px_-48px_rgba(15,27,51,0.36)]">
              <div className="grid gap-5">
                <a
                  href={`mailto:${person.email}`}
                  className="flex gap-4 text-slate-700 transition hover:text-[#2563EB]"
                >
                  <Mail
                    aria-hidden="true"
                    size={20}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0"
                  />
                  <span>Email: {person.email}</span>
                </a>
                <a
                  href={`tel:${person.phone.replaceAll(" ", "")}`}
                  className="flex gap-4 text-slate-700 transition hover:text-[#2563EB]"
                >
                  <Phone
                    aria-hidden="true"
                    size={20}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0"
                  />
                  <span>Phone: {person.phone}</span>
                </a>
                <p className="flex gap-4 text-slate-700">
                  <MapPin
                    aria-hidden="true"
                    size={20}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0"
                  />
                  <span>Location: {person.location}</span>
                </p>
              </div>
            </div>
          </address>
        </div>
      </MotionSection>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © 2026 Nguyễn Xuân Văn. Được xây dựng bằng Next.js.
      </footer>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-8 left-8 hidden gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-500 shadow-[0_18px_60px_-45px_rgba(15,27,51,0.4)] lg:flex"
      >
        <ShoppingBag size={17} strokeWidth={1.8} />
        <Search size={17} strokeWidth={1.8} />
        <BarChart3 size={17} strokeWidth={1.8} />
        <BriefcaseBusiness size={17} strokeWidth={1.8} />
      </div>
    </main>
  );
}
