"use client";

import SidebarList from "./SidebarList";
import ToggleSidebar from "./ToggleSidebar";

export default function Sidebar() {
  const handleMouseEnter = () => {
    const sidebar = document.querySelector(".drawer-sidebar");
    sidebar?.classList.remove("close");
  };
  const handleMouseLeave = () => {
    const sidebar = document.querySelector(".drawer-sidebar");
    const drawerToggle = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement | null;
    if (drawerToggle?.checked) sidebar?.classList.add("close");
  };

  const handleClick = () => {
    const sidebar = document.querySelector(".drawer-sidebar");
    const drawerToggle = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement | null;
    sidebar?.classList.remove("close");
    if (!drawerToggle?.checked) {
      sidebar?.classList.add("close");
    }
  };

  const handleClickCloseSidebar = () => {
    let drawerToggle = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement | null;
    if (window.innerWidth < 768) drawerToggle!.checked = false;
  };

  return (
    <div
      className="h-full w-full flex flex-col z-50 border-e border-base-content/10 bg-base-200"
      onMouseLeave={handleMouseLeave}
    >
      <ToggleSidebar setActive={handleClick} />
      <nav
        className="[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-base-200 [&::-webkit-scrollbar-thumb]:bg-base-300 h-full overflow-y-auto overflow-x-hidden pb-10"
        onMouseEnter={handleMouseEnter}
      >
        <SidebarList handleClick={handleClickCloseSidebar} />
      </nav>
    </div>
  );
}
