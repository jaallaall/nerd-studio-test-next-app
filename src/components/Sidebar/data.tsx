import { Language } from "../Icons/regular";

function randomId() {
  return Math.floor(Math.random() * 10);
}

export const sidebarMenu = [
  {
    subTitle: "",
    title: "translate",
    id: randomId(),
    href: "/translate",
    icon: <Language className="w-5 h-5 opacity-65" />,
    subMenu: [],
  },
];
