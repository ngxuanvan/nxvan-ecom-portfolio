"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock3, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { ProjectGallery } from "@/components/project-gallery";
import { Button } from "@/components/ui/button";
import type { PortfolioImage, Project } from "@/data/portfolio";

type ProjectShowcaseProps = {
  projects: Project[];
};

function getGalleryImages(project: Project): PortfolioImage[] {
  return [
    ...(project.images.cover ? [project.images.cover] : []),
    ...project.images.gallery,
    ...project.images.screenshots,
  ];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            layout
            className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_70px_-46px_rgba(15,27,51,0.38)] transition-colors hover:border-[#2563EB]/35 ${
              index === 0 ? "lg:row-span-2" : ""
            }`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                    boxShadow: "0 30px 86px -52px rgba(15,27,51,0.55)",
                  }
            }
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 22,
              delay: reduceMotion ? 0 : index * 0.08,
            }}
          >
            <div className="p-3">
              <ProjectGallery
                images={getGalleryImages(project)}
                projectTitle={project.title}
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium tracking-normal text-slate-500 proportional-nums">
                <span>{project.category}</span>
                {project.role ? <span>{project.role}</span> : null}
                {project.time ? <span>{project.time}</span> : null}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0F1B33] md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-[#2563EB]"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <Button
                type="button"
                variant="secondary"
                className="mt-7"
                onClick={() => setActiveProject(project)}
              >
                Xem chi tiết
                <ArrowUpRight
                  aria-hidden="true"
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-40 grid place-items-center bg-[#0F1B33]/35 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onMouseDown={() => setActiveProject(null)}
          >
            <motion.div
              className="max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-30px_rgba(15,27,51,0.55)] sm:p-8"
              initial={
                reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }
              }
              animate={
                reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }
              }
              transition={{ type: "spring", stiffness: 120, damping: 24 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-[#2563EB]">
                    {activeProject.category}
                  </p>
                  <h3
                    id={titleId}
                    className="mt-2 text-3xl font-semibold tracking-tight text-[#0F1B33]"
                  >
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Đóng chi tiết dự án"
                  onClick={() => setActiveProject(null)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#2563EB]/40 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <X aria-hidden="true" size={18} strokeWidth={1.8} />
                </button>
              </div>

              <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-4 text-sm font-medium tracking-normal text-slate-600 proportional-nums sm:grid-cols-2">
                {activeProject.role ? (
                  <p>
                    <span className="font-semibold text-[#0F1B33]">
                      Vai trò:
                    </span>{" "}
                    {activeProject.role}
                  </p>
                ) : null}
                {activeProject.time ? (
                  <p className="inline-flex items-center gap-2">
                    <Clock3 aria-hidden="true" size={16} strokeWidth={1.8} />
                    {activeProject.time}
                  </p>
                ) : null}
                {activeProject.status ? (
                  <p>
                    <span className="font-semibold text-[#0F1B33]">
                      Trạng thái:
                    </span>{" "}
                    {activeProject.status}
                  </p>
                ) : null}
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                {activeProject.description}
              </p>

              <div className="mt-8">
                <ProjectGallery
                  images={getGalleryImages(activeProject)}
                  projectTitle={activeProject.title}
                />
              </div>

              {activeProject.achievements.length > 0 ? (
                <ul className="mt-6 grid gap-3">
                  {activeProject.achievements.map((achievement) => (
                    <motion.li
                      key={achievement}
                      className="flex gap-3 text-slate-700"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 22 }}
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        size={18}
                        strokeWidth={1.8}
                        className="mt-1 shrink-0 text-[#2563EB]"
                      />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-600">
                  Đang cập nhật nội dung chi tiết. Chưa có chỉ số hoặc thành tựu
                  bổ sung để hiển thị.
                </p>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
