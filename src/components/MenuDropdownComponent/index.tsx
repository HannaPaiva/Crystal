import React, { useState, MouseEvent } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

interface MenuDropdownProps {
  icon: React.ReactNode;
  title: string;
  items: MenuItem[];
}

const MenuDropdownComponent: React.FC<MenuDropdownProps> = ({
  icon,
  title,
  items,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItemButton onClick={handleOpenMenu}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {items.map((item: any) => (
          <MenuItem key={item.id} onClick={item.onClick}>
            <Box sx={{ color: "rgba(0, 0, 0, 0.54)" }}>{item.icon}</Box>
            <Box sx={{ pb: 0.5, pl: 2 }}>{item.title}</Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuDropdownComponent;
