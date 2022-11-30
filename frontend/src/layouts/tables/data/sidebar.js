import "./sidebar.css";
import SidebarLink from "./SidebarLink";

function Sidebar({ rooms, setSelectedRoom }) {
  return (
    <div className="sidebar">
      <SidebarLink text="Room 1" setSelectedRoom={setSelectedRoom} />
      <SidebarLink text="Room 2" setSelectedRoom={setSelectedRoom} />
      <SidebarLink text="Room 3" setSelectedRoom={setSelectedRoom} />
      <SidebarLink text="Room 4" setSelectedRoom={setSelectedRoom} />
      <SidebarLink text="Room 5" setSelectedRoom={setSelectedRoom} />
    </div>
  );
}

export default Sidebar;
