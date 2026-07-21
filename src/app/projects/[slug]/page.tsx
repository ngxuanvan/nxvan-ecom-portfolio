import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/detail-pages/project-detail-page";
import { portfolio, type Project } from "@/data/portfolio";

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

function findProject(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {
      title: "Không tìm thấy dự án",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.title,
    description: project.detail.heroIntro,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: project.title,
      description: project.detail.heroIntro,
      images: project.images.cover ? [project.images.cover.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project as Project} />;
}
