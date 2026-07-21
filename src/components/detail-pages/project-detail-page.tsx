import { CheckCircle2, ExternalLink } from "lucide-react";

import {
  BackToPortfolio,
  DetailHero,
  DetailPageFrame,
  DetailSection,
} from "@/components/detail-pages/detail-layout";
import { DetailImageShowcase } from "@/components/detail-pages/detail-image-showcase";
import { DetailStagger, DetailStaggerItem } from "@/components/detail-pages/detail-motion";
import { PaymentProviderBadge } from "@/components/payment-provider-badge";
import { ProjectGallery } from "@/components/project-gallery";
import { Button } from "@/components/ui/button";
import type { PortfolioImage, Project } from "@/data/portfolio";

type ProjectDetailPageProps = {
  project: Project;
};

function collectGalleryImages(project: Project): PortfolioImage[] {
  const images = [
    project.images.cover,
    ...project.images.gallery,
    ...project.images.screenshots,
    project.caseStudy?.hero,
    ...(project.caseStudy?.sections.flatMap((section) => section.images) ?? []),
  ].filter(Boolean) as PortfolioImage[];

  return images.filter(
    (image, index, list) =>
      list.findIndex((candidate) => candidate.src === image.src) === index,
  );
}

function ProjectTextList({ items }: { items: readonly string[] }) {
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

function Technologies({ tags }: { tags: readonly string[] }) {
  return (
    <DetailStagger className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <DetailStaggerItem
          key={tag}
          className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#2563EB]"
        >
          {tag}
        </DetailStaggerItem>
      ))}
    </DetailStagger>
  );
}

function VisualSections({ project }: { project: Project }) {
  if (!project.caseStudy) {
    return null;
  }

  return (
    <>
      {project.caseStudy.sections.map((section) => (
        <DetailSection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.detailTitle ?? section.title}
        >
          <div className="space-y-6">
            <p className="text-pretty max-w-3xl text-base leading-7 text-slate-600">
              {section.description}
            </p>
            <DetailImageShowcase
              images={section.images}
              variant={
                section.layout === "wide"
                  ? "wide"
                  : section.layout === "two-up" || section.layout === "website"
                    ? "two-up"
                    : "featured"
              }
            />
          </div>
        </DetailSection>
      ))}
    </>
  );
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const heroImage = project.images.cover ?? project.caseStudy?.hero;
  const galleryImages = collectGalleryImages(project);

  return (
    <DetailPageFrame>
      <DetailHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
          { label: project.title },
        ]}
        title={project.title}
        eyebrow={project.category}
        time={project.time}
        role={project.role}
        intro={project.detail.heroIntro}
        image={heroImage}
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <DetailSection id="overview" eyebrow="01" title={project.slug === "resip" ? "System Overview" : "Overview"}>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            {project.detail.overview.map((paragraph) => (
              <p key={paragraph} className="text-pretty max-w-3xl">
                {paragraph}
              </p>
            ))}
          </div>
        </DetailSection>

        <DetailSection id="contributions" eyebrow="02" title="My Contributions">
          <div className="space-y-6">
            <p className="text-pretty max-w-3xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>
            {project.websiteUrl ? (
              <Button asChild>
                <a href={project.websiteUrl} target="_blank" rel="noreferrer">
                  Xem website
                  <ExternalLink aria-hidden="true" size={16} strokeWidth={1.8} />
                </a>
              </Button>
            ) : null}
          </div>
        </DetailSection>

        <DetailSection id="technologies" eyebrow="03" title="Technologies">
          <Technologies tags={project.tags} />
        </DetailSection>

        {project.detail.architecture ? (
          <DetailSection id="architecture" eyebrow="04" title="Architecture">
            <ProjectTextList items={project.detail.architecture} />
          </DetailSection>
        ) : null}

        <VisualSections project={project} />

        {project.paymentProviders ? (
          <DetailSection
            id="payment-integration"
            eyebrow="Payment"
            title="Payment Integration"
          >
            <div className="space-y-5">
              <p className="text-pretty max-w-3xl text-base leading-7 text-slate-600">
                Các phương thức thanh toán được trình bày để thể hiện phạm vi
                tích hợp trong hệ thống ReSip.
              </p>
              <div className="flex flex-wrap gap-3">
                {project.paymentProviders.map((provider) => (
                  <PaymentProviderBadge key={provider.name} provider={provider} />
                ))}
              </div>
            </div>
          </DetailSection>
        ) : null}

        <DetailSection id="gallery" eyebrow="Gallery" title="Gallery">
          <ProjectGallery images={galleryImages} projectTitle={project.title} />
        </DetailSection>

        <DetailSection id="results" eyebrow="Results" title="Results">
          <ProjectTextList items={project.achievements} />
        </DetailSection>

        <DetailSection id="reflection" eyebrow="Reflection" title="Reflection">
          <p className="text-pretty max-w-3xl text-lg leading-8 text-slate-600">
            {project.detail.reflection}
          </p>
        </DetailSection>
      </div>

      <BackToPortfolio />
    </DetailPageFrame>
  );
}
