import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";

import { ExperienceCard } from "@/components/experience-card";
import { HeroSection } from "@/components/hero-section";
import { MotionSection } from "@/components/motion-section";
import { StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { ProjectShowcase } from "@/components/project-showcase";
import { SiteNavigation } from "@/components/site-navigation";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

function SectionHeading({
  eyebrow,
  title,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-semibold uppercase tracking-normal proportional-nums ${
          tone === "dark" ? "text-blue-200" : "text-[#2563EB]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-balance mt-4 text-4xl font-semibold leading-[1.22] tracking-tight md:text-6xl md:leading-[1.18] ${
          tone === "dark" ? "text-white" : "text-[#0F1B33]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

const aboutHighlightPattern =
  /(Thương mại điện tử|Google Search Console|Google Analytics|E-commerce|SEO)/g;
const aboutHighlightKeywords = new Set([
  "Thương mại điện tử",
  "SEO",
  "Google Analytics",
  "Google Search Console",
  "E-commerce",
]);

function HighlightProfessionalKeywords({ text }: { text: string }) {
  return text.split(aboutHighlightPattern).map((part, index) =>
    aboutHighlightKeywords.has(part) ? (
      <span key={`${part}-${index}`} className="font-semibold text-[#2563EB]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Home() {
  const { person } = portfolio;

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-white text-[#0F1B33]">
      <SiteNavigation name={person.name} nav={[...portfolio.nav]} cvPath={person.cvPath} />

      <HeroSection
        name={person.name}
        title={person.title}
        description={portfolio.hero.description}
        profileImage={person.profileImage}
        cvPath={person.cvPath}
      />

      <MotionSection
        id="gioi-thieu"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="01" title={portfolio.about.title} />
          <div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <HighlightProfessionalKeywords text={paragraph} />
                </p>
              ))}
            </div>
            <StaggerGroup className="mt-8">
              <StaggerItem
                hover
                className="grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50/70 shadow-[0_14px_42px_-38px_rgba(15,27,51,0.28)] transition-colors hover:border-[#2563EB]/25 sm:grid-cols-3"
              >
                {portfolio.about.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`px-5 py-4 sm:px-6 ${
                      index > 0
                        ? "border-t border-slate-200 sm:border-l sm:border-t-0"
                        : ""
                    }`}
                  >
                    <p className="text-3xl font-semibold tracking-normal text-[#0F1B33] proportional-nums">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="kinh-nghiem"
        className="border-y border-slate-200 bg-slate-50 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 grid gap-5 md:mb-7 md:grid-cols-[auto_1fr] md:items-end">
            <SectionHeading eyebrow="02" title="Kinh nghiệm" />
            <div className="hidden h-px bg-slate-200 md:block" />
          </div>
          <ExperienceCard experience={portfolio.experience} />
        </div>
      </MotionSection>

      <MotionSection
        id="du-an"
        className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading eyebrow="03" title="Dự án nổi bật" />
          <p className="text-pretty max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Các dự án tập trung vào vận hành E-commerce, SEO, phân tích hiệu quả
            và phát triển website theo nhu cầu kinh doanh cụ thể.
          </p>
        </div>
        <ProjectShowcase projects={[...portfolio.projects]} />
      </MotionSection>

      <MotionSection
        id="ky-nang"
        className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc,#ffffff)] py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <SectionHeading eyebrow="04" title="Kỹ năng" />
            <p className="text-pretty max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Nhóm kỹ năng được tổ chức theo cách sử dụng trong dự án: vận hành
              sàn, SEO, công cụ triển khai và kỹ thuật website.
            </p>
          </div>
          <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portfolio.skills.map((group, index) => {
              const icons = [ShoppingBag, Search, BarChart3, BriefcaseBusiness];
              const Icon = icons[index] ?? BriefcaseBusiness;

              return (
              <StaggerItem
                key={group.title}
                hover
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-52px_rgba(15,27,51,0.34)] transition-colors hover:border-[#2563EB]/35"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-[#0F1B33]">
                    {group.title}
                  </h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2563EB]">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium leading-5 text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </MotionSection>

      <MotionSection
        id="hoc-van"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1.55fr] xl:grid-cols-[0.42fr_1.58fr]">
          <SectionHeading eyebrow="05" title="Học vấn" />
          <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:gap-6">
            {portfolio.education.map((item) => (
              <StaggerItem
                key={item.school}
                hover
                className="flex min-h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_64px_-48px_rgba(15,27,51,0.38)] transition-colors hover:border-[#2563EB]/35"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-16 w-28 items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_14px_38px_-30px_rgba(15,27,51,0.42)]">
                    {item.logo ? (
                      <Image
                        src={item.logo.src}
                        alt={item.logo.alt}
                        width={160}
                        height={80}
                        className="max-h-10 w-auto object-contain"
                      />
                    ) : (
                      <GraduationCap
                        aria-hidden="true"
                        size={30}
                        strokeWidth={1.8}
                        className="text-[#2563EB]"
                      />
                    )}
                  </div>
                  <p className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold tracking-normal text-[#2563EB] proportional-nums">
                    {item.time}
                  </p>
                </div>
                <h3 className="text-balance mt-8 text-xl font-semibold leading-tight tracking-tight text-[#0F1B33] xl:text-[1.32rem] 2xl:text-[1.42rem]">
                  {item.school}
                </h3>
                <p className="mt-5 text-slate-600">{item.major}</p>
                <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">
                    Môn học tiêu biểu
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-sm font-medium leading-5 text-[#1d4ed8]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto border-t border-slate-100 pt-5">
                  <p className="text-sm font-medium tracking-normal text-slate-500">
                    {item.gpa.label}
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-normal text-[#0F1B33] proportional-nums">
                    {item.gpa.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </MotionSection>

      <MotionSection id="lien-he" className="border-t border-slate-200 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#2563EB] proportional-nums">
              06
            </p>
            <h2 className="text-balance mt-4 max-w-3xl text-4xl font-semibold leading-[1.22] tracking-tight md:text-6xl md:leading-[1.18]">
              Cùng trao đổi về cơ hội E-commerce & Digital Marketing
            </h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={`mailto:${person.email}`}>
                  <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
                  Gửi email
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={person.cvPath} download>
                  Tải CV
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={person.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <ExternalLink
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={person.social.github} target="_blank" rel="noreferrer">
                  GitHub
                  <ExternalLink
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Button>
            </div>
          </div>
          <div className="not-italic">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_70px_-48px_rgba(15,27,51,0.36)]">
              <div className="grid gap-5">
                <a
                  href={`mailto:${person.email}`}
                  className="flex gap-4 rounded-2xl p-3 text-slate-700 transition hover:-translate-y-0.5 hover:bg-blue-50/60 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
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
                  className="flex gap-4 rounded-2xl p-3 text-slate-700 transition hover:-translate-y-0.5 hover:bg-blue-50/60 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <Phone
                    aria-hidden="true"
                    size={20}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0"
                  />
                  <span>Phone: {person.phone}</span>
                </a>
                <p className="flex gap-4 rounded-2xl p-3 text-slate-700">
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
          </div>
        </div>
      </MotionSection>

      <footer className="border-t border-slate-200 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-[#0F1B33]">{person.name}</p>
            <p className="mt-1">© 2026 Nguyễn Xuân Văn.</p>
          </div>
          <nav aria-label="Điều hướng chân trang" className="flex flex-wrap gap-x-4 gap-y-2">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium transition hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
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
