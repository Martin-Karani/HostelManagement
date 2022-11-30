import { useState } from "react";
import "./sidebarLink.css";

function SidebarLink({ text, setSelectedRoom }) {
  const [active, setActive] = useState("");
  return (
    <div className="link" onClick={setSelectedRoom(text)}>
      <h5 onClick={() => setActive(text)}>{text}</h5>
    </div>
  );
}
export default SidebarLink;
