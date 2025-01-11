import { IconType } from "react-icons";

export type NavLinkType = {
  id: number;
  title: string;
  href: string;
  subMenu?: () => React.JSX.Element | null;
};

export type IconNavLinkType = {
  Icon: IconType;
  href: string;
};
