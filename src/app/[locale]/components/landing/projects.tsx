"use client"

import { useState } from "react";
import WaitlistDialog from "../common/waitlist-dialog";
import NewsletterDialog from "../common/newsletter-dialog";
import ProjectCard from "../common/project-card";
import { useTranslations } from "next-intl";

const images = [
  "/pierre1.png",
  "/pierre2.png",
  "/pierre3.png",
  "/pierre4.png",
]

const Projects = () => {
  const t = useTranslations("Home")

  return (
    <div id="projekti">
      <div className="max-w-7xl mx-auto p-5 py-20">
        <h2 className="text-4xl font-bold mb-7">{t("planned-projects.title")}</h2>
        <p>{t("planned-projects.paragraph-1")}</p>
        <p>{t("planned-projects.paragraph-2")}</p>
        <ProjectCard images={images} />
        <div className="mt-10">
          <p className="text-xl font-bold mb-5">{t("planned-projects.paragraph-3")}</p>
          <p>{t("planned-projects.paragraph-4")}</p>
          <div className="flex flex-wrap gap-3 mt-5">
            <NewsletterDialog>
              <div className="bg-zinc-100 text-black px-8 py-3 font-bold rounded-xs">{t("planned-projects.secondary-cta")}</div>
            </NewsletterDialog>
            <WaitlistDialog>
              <div className="bg-[#242424] text-white px-8 py-3 font-bold rounded-xs">{t("planned-projects.primary-cta")}</div>
            </WaitlistDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;