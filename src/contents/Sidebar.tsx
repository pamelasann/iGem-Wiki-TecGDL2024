import React, { useState, useEffect } from "react";

interface SidebarProps {
  items: {
    mainPart: { title: string; id: string };
    subParts: { title: string; id: string }[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentId = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentId = section.id;
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="titles-container">
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li
            key={index}
            className={`ps-4 sidebar-item ${activeId === item.mainPart.id ? "active" : ""}`}
          >
            <a href={`#${item.mainPart.id}`}>{item.mainPart.title}</a>
            {item.subParts.length > 0 && (
              <ul className="list-unstyled">
                {item.subParts.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`ps-4 sidebar-item ${activeId === subItem.id ? "active" : ""}`}
                  >
                    <a href={`#${subItem.id}`} className="subtitle">{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
