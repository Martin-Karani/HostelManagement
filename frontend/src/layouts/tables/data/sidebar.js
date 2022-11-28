import "./sidebar.css";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLink text="Room 1" />
      <SidebarLink text="Room 5" />
      <SidebarLink text="Room 91" />
      <SidebarLink text="Room 6" />
      <SidebarLink text="Room 5" />
      <SidebarLink text="Room 8" />
      <SidebarLink text="Room 18" />
      <SidebarLink text="Room 84" />
    </div>
  );
}

export default Sidebar;
