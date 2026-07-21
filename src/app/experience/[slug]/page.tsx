import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExperienceDetailPage } from "@/components/detail-pages/experience-detail-page";
import { portfolio } from "@/data/portfolio";

type ExperienceRouteProps = {
  params: Promise<{ slug: string }>;
};

function findExperience(slug: string) {
  return portfolio.experience.slug === slug ? portfolio.experience : null;
}

export function generateStaticParams() {
  return [{ slug: portfolio.experience.slug }];
}

export async function generateMetadata({
  params,
}: ExperienceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = findExperience(slug);

  if (!experience) {
    return {
      title: "Không tìm thấy kinh nghiệm",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: experience.company,
    description: experience.detail.heroIntro,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: experience.company,
      description: experience.detail.heroIntro,
      images: [experience.image.src],
    },
  };
}

export default async function ExperiencePage({ params }: ExperienceRouteProps) {
  const { slug } = await params;
  const experience = findExperience(slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailPage experience={experience} />;
}
