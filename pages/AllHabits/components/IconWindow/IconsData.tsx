import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faBriefcase,
  faBullhorn,
  faCalculator,
  faCamera,
  faChartLine,
  faChartPie,
  faCodeBranch,
  faCogs,
  faComments,
  faDatabase,
  faEnvelope,
  faFileAlt,
  faFilter,
  faFlask,
  faGavel,
  faGlobe,
  faGraduationCap,
  faHandshake,
  faLaptopCode,
  faLightbulb,
  faMoneyBill,
  faPalette,
  faPhoneAlt,
  faPlaneDeparture,
  faQuestion,
  faSearch,
  faShareAlt,
  faSlidersH,
  faSort,
  faTable,
  faTools,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

type iconsData = {
  faIcon: IconProp;
  isSelected: boolean;
  iconTitle: string;
};
export const iconsData: iconsData[] = [
  {
    faIcon: faFlask,
    isSelected: true,
    iconTitle: "flask",
  },
  {
    faIcon: faBook,
    isSelected: false,
    iconTitle: "book",
  },
  {
    faIcon: faGlobe,
    isSelected: false,
    iconTitle: "Globe",
  },
  {
    faIcon: faLaptopCode,
    isSelected: false,
    iconTitle: "Laptop",
  },
  {
    faIcon: faPalette,
    isSelected: false,
    iconTitle: "Palette",
  },
  {
    faIcon: faComments,
    isSelected: false,
    iconTitle: "Comments",
  },
  {
    faIcon: faPhoneAlt,
    isSelected: false,
    iconTitle: "Phone",
  },
  {
    faIcon: faEnvelope,
    isSelected: false,
    iconTitle: "Envelope",
  },
  {
    faIcon: faShareAlt,
    isSelected: false,
    iconTitle: "Share",
  },
  {
    faIcon: faSearch,
    isSelected: false,
    iconTitle: "Search",
  },
  {
    faIcon: faSlidersH,
    isSelected: false,
    iconTitle: "Slider",
  },
  {
    faIcon: faFilter,
    isSelected: false,
    iconTitle: "Filter",
  },
  {
    faIcon: faSort,
    isSelected: false,
    iconTitle: "Sort",
  },
  {
    faIcon: faChartPie,
    isSelected: false,
    iconTitle: "Chart",
  },
  {
    faIcon: faTable,
    isSelected: false,
    iconTitle: "Table",
  },
  {
    faIcon: faDatabase,
    isSelected: false,
    iconTitle: "Database",
  },
  {
    faIcon: faFileAlt,
    isSelected: false,
    iconTitle: "File",
  },
  {
    faIcon: faCamera,
    isSelected: false,
    iconTitle: "Camera",
  },
  {
    faIcon: faCalculator,
    isSelected: false,
    iconTitle: "Calculator",
  },
  {
    faIcon: faCogs,
    isSelected: false,
    iconTitle: "Cogs",
  },
  {
    faIcon: faCodeBranch,
    isSelected: false,
    iconTitle: "code",
  },
  {
    faIcon: faUser,
    isSelected: false,
    iconTitle: "user",
  },
  {
    faIcon: faQuestion,
    isSelected: false,
    iconTitle: "question",
  },
  {
    faIcon: faGraduationCap,
    isSelected: false,
    iconTitle: "study",
  },
  {
    faIcon: faHandshake,
    isSelected: false,
    iconTitle: "handshake",
  },
  {
    faIcon: faUsers,
    isSelected: false,
    iconTitle: "users",
  },
  {
    faIcon: faChartLine,
    isSelected: false,
    iconTitle: "chartLine",
  },
  {
    faIcon: faMoneyBill,
    isSelected: false,
    iconTitle: "MoneyBill",
  },
  {
    faIcon: faBriefcase,
    isSelected: false,
    iconTitle: "Briefcase",
  },
  {
    faIcon: faBullhorn,
    isSelected: false,
    iconTitle: "bullhorn",
  },
  {
    faIcon: faTools,
    isSelected: false,
    iconTitle: "Tools",
  },
  {
    faIcon: faGavel,
    isSelected: false,
    iconTitle: "Gavel",
  },
  {
    faIcon: faLightbulb,
    isSelected: false,
    iconTitle: "LightBulb",
  },
  {
    faIcon: faPlaneDeparture,
    isSelected: false,
    iconTitle: "plane",
  },
];
const IconsData = () => {
  return <div></div>;
};

export default IconsData;
