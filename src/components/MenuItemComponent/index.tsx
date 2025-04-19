import React, { ReactNode, MouseEventHandler } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export interface MenuItemProps {
  icon: ReactNode;
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  icon,
  title,
  onClick,
}) => {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default MenuItemComponent;
