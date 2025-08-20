"use client"

import { useState } from "react";
import WaitlistDialog from "../common/waitlist-dialog";
import NewsletterDialog from "../common/newsletter-dialog";
import ProjectCard from "../common/project-card";

const images = [
  "/pp-1.webp",
  "/pp-2.webp",
]

const Projects = () => {
  return (
    <div id="projekti">
      <div className="max-w-7xl mx-auto p-5 py-20">
        <h2 className="text-4xl font-bold mb-7">Planirani projekti</h2>
        <p>U toku je priprema projektnog rešenja za naš prvi pilot projekat.</p>
        <p>Javno finansiranje kroz decimetre kvadratne i realizacija projekta planirani su nakon uspešnog završetka inicijalne ponude DM2 tokena.</p>
        <ProjectCard images={images} />
        <div className="mt-10">
          <p className="text-xl font-bold mb-5">Želite da budete među prvim investitorima?</p>
          <p>Prijavite se na naš newsletter i saznajte čim projekat postane dostupan za ulaganje. Ili se prijavite na listu čekanja za tokene i ostvarite prihod u svakom slučaju.</p>
          <div className="flex flex-wrap gap-3 mt-5">
            <NewsletterDialog>
              <div className="bg-zinc-100 text-black px-8 py-3 font-bold rounded-xs">Prijavite se na newsletter</div>
            </NewsletterDialog>
            <WaitlistDialog>
              <div className="bg-[#242424] text-white px-8 py-3 font-bold rounded-xs">Prijavite se na listu čekanja za tokene</div>
            </WaitlistDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;