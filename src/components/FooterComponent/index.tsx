import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import styles from "./styles.module.scss"; // Assuming your styles are imported here

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://espacorenatasanches.com/">
        Espaço Renata Sanches
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function FooterComponent() {
  const [isInView, setIsInView] = useState(false); // State to track if component is in view
  const footerRef = useRef<HTMLDivElement | null>(null); // Ref to the footer element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when the footer is in view
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the footer is in view
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Start observing the footer
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <Box
      ref={footerRef}
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        background: "rgba(42, 143, 156, 1)",
        color: "#fff",
      }}
      className={isInView ? styles.fadeInUp : ""}
    >
      <Container maxWidth="lg">
        {/* Footer Content */}
        <Grid container spacing={4}>
          {/* Sobre Nós Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Sobre o Estúdio
            </Typography>
            <Typography variant="body2">
              No nosso estúdio de yoga, oferecemos aulas transformadoras para
              melhorar o seu bem-estar. Venha descobrir o equilíbrio e a paz
              interior através da prática de yoga.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links Rápidos
            </Typography>
            <Stack direction="column" spacing={1}>
              <Link
                href="https://linktr.ee/espacorenatasanches?fbclid=PAZXh0bgNhZW0CMTEAAaZbn43gDzfETjEYCu5SM88WhIPA4p8gGcYWCCKKMdvxW4HGFQXLpfkJdS4_aem_vuXY22GCTkOyrZGL7UFzGQ"
                color="inherit"
                underline="hover"
              >
                Contato
              </Link>
              <Link
                href="https://venda.nextfit.com.br/aa0ea082-309d-4518-aa33-8c4486a18861/contratos"
                target="_blank"
                color="inherit"
                underline="hover"
              >
                Ver Planos
              </Link>
            </Stack>
          </Grid>

          {/* Localização Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Localização
            </Typography>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon />
                <Typography variant="body2">
                  Torre London - Av. Sagitário, 138 - Alphaville, Barueri - SP
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneIcon />
                <Typography variant="body2">+55 11 99881-0251</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <ScheduleIcon />
                <Typography variant="body2">Seg - Sex: 8h - 18h</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "#fff" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className={isInView ? styles.fadeInUp : ""}
        >
          <Stack direction="row" spacing={2}>
            <Link
              href="https://www.instagram.com/yogarenatasanches/"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{ "&:hover": { color: "#0ce1d5" } }}
            >
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5511998810251"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              sx={{ "&:hover": { color: "#0ce1d5" } }}
            >
              <WhatsAppIcon fontSize="large" />
            </Link>
          </Stack>

          <Copyright />
        </Stack>
      </Container>
    </Box>
  );
}
