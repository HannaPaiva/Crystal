import React, { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItemComponent, { MenuItemProps } from "../MenuItemComponent";

export interface MenuAccordionProps {
  icon: ReactNode;
  title: string;
  items: MenuItemProps[];
}

const accordionStyle: React.CSSProperties = {
  boxShadow: "none",
  border: "none",
};

const MenuAccordionComponent: React.FC<MenuAccordionProps> = ({
  icon,
  title,
  items,
}) => {
  return (
    <Accordion style={accordionStyle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </AccordionSummary>
      <AccordionDetails>
        {items.map((item, index) => (
          <MenuItemComponent key={index} {...item} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuAccordionComponent;
