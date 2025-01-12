import React from "react";
import Hero from "../../../../components/home/entreprenuer/hero";
import MiddleSection from "../../../../components/home/entreprenuer/MiddleSection";
import ProjectSection from "../../../../components/home/entreprenuer/ProjectSection";
import images from "../../../../../public/images";
import { ProjectCaptureProps, SocialLink } from "@/lib/types";

const socialLinks: SocialLink[] = [
  {
    Icon: images.socialLinks.twitter,
    href: "#",
  },
  {
    Icon: images.socialLinks.linkedin,
    href: "#",
  },
  {
    Icon: images.socialLinks.facebook,
    href: "#",
  },
  {
    Icon: images.socialLinks.instagram,
    href: "#",
  },
];

const projectCaptures: ProjectCaptureProps[] = [
  {
    Icon: images.entrepreneurPage.enterprenuerProject1,
    text: "Photographing Pairs",
  },
  {
    Icon: images.entrepreneurPage.enterprenuerProject2,
    text: "Learning Light",
  },
  {
    Icon: images.entrepreneurPage.enterprenuerProject3,
    text: "Environmental Portraiture",
  },
];

const EntrepreneurPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  console.log("slug params", slug);

  return (
    <div className="flex flex-col gap-10 overflow-hidden">
      <Hero
        bgImage={images.entrepreneurPage.enterprenuerHero}
        title="Alejandra Cruz is a designer and artist from Barcelona, Spain."
        subtitle="Her new collection is out now."
        socialLinks={socialLinks}
        websiteLink="#"
      />
      <MiddleSection
        title="Alejandra Cruz grew up by the beach, but you won't mistake her
          art for breezy"
        subtitle="She designs from the point of view of outcasts and misfits, bringing a
          new perspective and incisive wit to her tales of relationships gone
          wrong. With a smoky voice trained on jazz classics and a stacked
          backing band, she combines a vintage sound with modern material to
          thrilling effect."
        bgImage={images.entrepreneurPage.enterprenuerFashion}
        overlayText="Fashion is life!"
      />
      <ProjectSection
        title="Project"
        subtitle="We worked with her on the marketing of her new collection. We created an
        image campaign that would resonate with her target audience, boosting
        her sales by 50%."
        projectCaptures={projectCaptures}
      />
    </div>
  );
};

export default EntrepreneurPage;
