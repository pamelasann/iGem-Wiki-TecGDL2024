import React from "react";

interface SidebarProps {
  items: {
    mainPart: { title: string; id: string };
    subParts: { title: string; id: string }[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div id="titles-container">
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={index} className="ps-4">
            <a href={`#${item.mainPart.id}`}>{item.mainPart.title}</a>
            {item.subParts.length > 0 && (
              <ul className="list-unstyled">
                {item.subParts.map((subItem, subIndex) => (
                  <li key={subIndex} className="ps-4">
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
