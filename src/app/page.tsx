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
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-normal text-[#2563EB] proportional-nums">
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
            <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3">
              {portfolio.about.stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  hover
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-38px_rgba(15,27,51,0.35)] transition-colors hover:border-[#2563EB]/30"
                >
                  <p className="text-2xl font-semibold tracking-normal text-[#0F1B33] proportional-nums">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="kinh-nghiem"
        className="border-y border-slate-200 bg-slate-50 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <SectionHeading eyebrow="02" title="Kinh nghiệm" />
          <ExperienceCard experience={portfolio.experience} />
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
              <p className="text-sm font-semibold uppercase tracking-normal text-blue-200 proportional-nums">
                04
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-none tracking-tight md:text-6xl">
                Kỹ năng
              </h2>
            </div>
            <StaggerGroup className="grid gap-5 md:grid-cols-2">
              {portfolio.skills.map((group) => (
                <StaggerItem
                  key={group.title}
                  hover
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_70px_-55px_rgba(37,99,235,0.45)] transition-colors hover:border-blue-300/30 hover:bg-white/[0.06]"
                >
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <ul className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 rounded-xl px-2 py-1 text-sm text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="hoc-van"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1.55fr] xl:grid-cols-[0.4fr_1.6fr]">
          <SectionHeading eyebrow="05" title="Học vấn" />
          <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:gap-6">
            {portfolio.education.map((item) => (
              <StaggerItem
                key={item.school}
                hover
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_64px_-48px_rgba(15,27,51,0.38)] transition-colors hover:border-[#2563EB]/35"
              >
                <div className="flex h-16 w-24 items-center justify-center rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_14px_38px_-30px_rgba(15,27,51,0.42)]">
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
                <h3 className="mt-8 text-xl font-semibold leading-tight tracking-tight text-[#0F1B33] xl:text-[1.35rem] 2xl:text-[1.45rem]">
                  {item.school}
                </h3>
                <p className="mt-4 text-sm font-semibold tracking-normal text-[#2563EB] proportional-nums">
                  {item.time}
                </p>
                <p className="mt-5 text-slate-600">{item.major}</p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-slate-500">
                    Môn học tiêu biểu
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-sm font-medium leading-5 text-[#1d4ed8]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-5">
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

      <MotionSection id="lien-he" className="border-t border-slate-200 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#2563EB] proportional-nums">
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
          <address className="not-italic">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_70px_-48px_rgba(15,27,51,0.36)]">
              <div className="grid gap-5">
                <a
                  href={`mailto:${person.email}`}
                  className="flex gap-4 rounded-2xl p-2 text-slate-700 transition hover:-translate-y-0.5 hover:bg-blue-50/60 hover:text-[#2563EB]"
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
                  className="flex gap-4 rounded-2xl p-2 text-slate-700 transition hover:-translate-y-0.5 hover:bg-blue-50/60 hover:text-[#2563EB]"
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
