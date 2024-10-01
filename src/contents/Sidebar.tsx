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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold to determine how much of the element needs to be visible
    );

    // Observe each section
    items.forEach((item) => {
      observer.observe(document.getElementById(item.mainPart.id) as Element);
      item.subParts.forEach((subItem) => {
        observer.observe(document.getElementById(subItem.id) as Element);
      });
    });

    return () => {
      observer.disconnect(); // Cleanup the observer on component unmount
    };
  }, [items]);

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
