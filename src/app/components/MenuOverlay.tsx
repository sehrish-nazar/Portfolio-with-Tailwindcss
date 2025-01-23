import React from "react";
import NavLink from '../components/NavLink'; 


interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[]; // `links` prop should be an array of `LinkItem` objects
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
