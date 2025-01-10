import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type NavLinkType = {
  title: string;
  href: string;
};

export type IconNavLinkType = {
  Icon: IconType;
  href: string;
};

export type SocialLink = {
  Icon: string;
  href: string;
};

export type ProjectCaptureProps = {
  Icon: StaticImageData;
  text: string;
};
