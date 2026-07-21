import { CheckCircle2 } from "lucide-react";

import {
  BackToPortfolio,
  DetailHero,
  DetailPageFrame,
  DetailSection,
} from "@/components/detail-pages/detail-layout";
import {
  DetailImageShowcase,
  type DetailShowcaseImage,
} from "@/components/detail-pages/detail-image-showcase";
import { DetailStagger, DetailStaggerItem } from "@/components/detail-pages/detail-motion";
import type { portfolio } from "@/data/portfolio";

type ExperienceDetailPageProps = {
  experience: typeof portfolio.experience;
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <DetailStagger className="grid gap-3">
      {items.map((item) => (
        <DetailStaggerItem
          key={item}
          className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-[0_18px_48px_-42px_rgba(15,27,51,0.35)]"
        >
          <CheckCircle2
            aria-hidden="true"
            size={18}
            strokeWidth={1.8}
            className="mt-1 shrink-0 text-[#2563EB]"
          />
          <span className="text-pretty leading-7">{item}</span>
        </DetailStaggerItem>
      ))}
    </DetailStagger>
  );
}

function KpiPanel() {
  const kpis = [
    { value: "5", label: "nhóm từ khóa" },
    { value: "25", label: "bài SEO" },
    { value: "35", label: "sản phẩm" },
  ];

  return (
    <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_-42px_rgba(15,27,51,0.36)] sm:grid-cols-3">
      {kpis.map((kpi, index) => (
        <div
          key={kpi.label}
          className={`p-5 ${
            index > 0 ? "border-t border-slate-200 sm:border-l sm:border-t-0" : ""
          }`}
        >
          <p className="text-3xl font-semibold tracking-normal text-[#0F1B33] proportional-nums">
            {kpi.value}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}

function asDetailImage(
  image: (typeof portfolio.experience.evidenceImages)[number],
  description: string,
): DetailShowcaseImage {
  return {
    src: image.src,
    alt: image.alt,
    title: image.caption,
    caption: image.caption,
    description,
  };
}

export function ExperienceDetailPage({ experience }: ExperienceDetailPageProps) {
  const keywordImage = asDetailImage(
    experience.evidenceImages[0],
    experience.detail.keywordResearch,
  );
  const trackingImages = [
    asDetailImage(experience.evidenceImages[1], experience.detail.tracking),
    asDetailImage(experience.evidenceImages[2], experience.detail.tracking),
  ];
  const backlinkImage = asDetailImage(
    experience.evidenceImages[3],
    experience.detail.backlinkReports,
  );

  return (
    <DetailPageFrame>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experience" },
          { label: "Dương Gia Phát" },
        ]}
        title="Dương Gia Phát"
        eyebrow={experience.role}
        time={experience.time}
        role={experience.company}
        intro={experience.detail.heroIntro}
        image={experience.image}
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <DetailSection id="company-overview" eyebrow="01" title="Company Overview">
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            {experience.detail.companyOverview.map((paragraph) => (
              <p key={paragraph} className="text-pretty max-w-3xl">
                {paragraph}
              </p>
            ))}
          </div>
        </DetailSection>

        <DetailSection id="responsibilities" eyebrow="02" title="My Responsibilities">
          <BulletList items={experience.bullets} />
        </DetailSection>

        <DetailSection id="seo-workflow" eyebrow="03" title="SEO Workflow">
          <div className="space-y-6">
            <KpiPanel />
            <BulletList items={experience.detail.seoWorkflow} />
          </div>
        </DetailSection>

        <DetailSection id="keyword-research" eyebrow="04" title="Keyword Research">
          <DetailImageShowcase images={[keywordImage]} variant="wide" />
        </DetailSection>

        <DetailSection id="tracking" eyebrow="05" title="Tracking">
          <DetailImageShowcase images={trackingImages} variant="two-up" />
        </DetailSection>

        <DetailSection id="backlink-reports" eyebrow="06" title="Backlink Reports">
          <DetailImageShowcase images={[backlinkImage]} variant="wide" />
        </DetailSection>

        <DetailSection id="reflection" eyebrow="07" title="Reflection">
          <p className="text-pretty max-w-3xl text-lg leading-8 text-slate-600">
            {experience.detail.reflection}
          </p>
        </DetailSection>
      </div>

      <BackToPortfolio />
    </DetailPageFrame>
  );
}
