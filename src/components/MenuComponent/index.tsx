import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LogoComponent from "../LogoComponent";
import styles from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const MenuComponent = ({ variant = "colored", marginBottom = true }) => {
  const [menuColor, setMenuComponentColor] = useState<string>("transparent");
  const [textWhite, setTextWhite] = useState<boolean>(variant === "white");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 50;

      if (scrollY > threshold) {
        setMenuComponentColor(`rgba(255, 255, 255, ${scrollY / 150})`);
        setTextWhite(false);
      } else {
        setMenuComponentColor("transparent");

        if (variant === "white") {
          setTextWhite(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {marginBottom && <Box sx={{ py: 3 }} />}

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: menuColor,
          boxShadow: menuColor === "transparent" ? "none" : undefined,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              pb: 1.0,
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Link
                href="/"
                className={`${styles.menu_logo} ${textWhite ? styles.menu_logo_white : ""}`}
              >
                <LogoComponent white={textWhite} />
              </Link>
            </Box>

            {isMobile ? (
              <React.Fragment>
                <IconButton
                  aria-controls="menu-dropdown"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  sx={{
                    mt: 1,
                    fontSize: "20px",
                    color: textWhite ? "#fff" : "#0ce1d5",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-dropdown"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{ animation: "slideIn 0.5s ease-out forwards" }} // Apply slide-in animation
                >
                  <MenuItem onClick={handleMenuClose}>
                    <a
                      href="#"
                      className={
                        textWhite ? styles.menu_link_white : styles.menu_link
                      }
                    >
                      Features
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a
                      href="#"
                      className={
                        textWhite ? styles.menu_link_white : styles.menu_link
                      }
                    >
                      Enterprise
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <a
                      href="#"
                      className={
                        textWhite ? styles.menu_link_white : styles.menu_link
                      }
                    >
                      Support
                    </a>
                  </MenuItem>
                  <hr />
                  <MenuItem onClick={handleMenuClose}>
                    <a color={textWhite ? "info" : "primary"}>Ver Planos</a>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <nav>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& a": {
                      margin: "0 10px",
                      "@media (max-width: 600px)": {
                        margin: "5px",
                      },
                    },
                    pt: 1,
                  }}
                >
                  <Link
                    href="https://linktr.ee/espacorenatasanches?fbclid=PAZXh0bgNhZW0CMTEAAaZbn43gDzfETjEYCu5SM88WhIPA4p8gGcYWCCKKMdvxW4HGFQXLpfkJdS4_aem_vuXY22GCTkOyrZGL7UFzGQ"
                    target="_blank"
                    className={
                      textWhite ? styles.menu_link_white : styles.menu_link
                    }
                  >
                    Contato
                  </Link>
                  <Link
                    href="https://venda.nextfit.com.br/aa0ea082-309d-4518-aa33-8c4486a18861/contratos"
                    target="_blank"
                  >
                    <Button
                      variant={textWhite ? "outlined" : "contained"}
                      color={textWhite ? "info" : "primary"}
                      size="small"
                      sx={{
                        my: 1,
                        mx: 1.5,
                        color: "#fff",
                      }}
                    >
                      Ver Planos
                    </Button>
                  </Link>
                </Box>
              </nav>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MenuComponent;
