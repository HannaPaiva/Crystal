import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import styles from "./styles.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

export interface CarouselComponentProps {
  carouselImages: string[];
  title: string;
  description: string;
  buttonText?: string;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  carouselImages,
  title,
  description,
  buttonText,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const autoPlayNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(autoPlayNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(12, 225, 213, 0.5), rgba(12, 225, 213, 0.2)), url(${carouselImages[activeSlide]})`,
      }}
      className={styles.carousel}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "90%" }}
      >
        <Grid container maxWidth={"xl"} px={3}>
          <Grid
            item
            md={1}
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="start"
          >
            <Box
              className={styles.carousel_arrow}
              onClick={() => handlePrevSlide()}
            >
              <Box pl={0.9} pt={0.5}>
                <ArrowBackIosIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Container maxWidth="md">
              <h2 className={styles.carousel_title}>{title}</h2>
              <p>{description}</p>

              {buttonText && (
                <Button sx={{ marginTop: 4 }} variant="outlined" color="info">
                  {buttonText}
                </Button>
              )}
            </Container>
          </Grid>
          <Grid item md={2}>
            <Box
              component="div"
              display={{ xs: "flex", md: "block" }}
              pt={5}
              // @ts-expect-error expected
              align="center"
            >
              <Box mb={2} className={styles.carousel_social_icons}>
                <Link
                  href="https://www.instagram.com/yogarenatasanches/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <InstagramIcon sx={{ pt: 1, fontSize: 35 }} />
                </Link>
              </Box>
              <Box mb={2} className={styles.carousel_social_icons}>
                <Link
                  href="https://api.whatsapp.com/send?phone=5511998810251"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <WhatsAppIcon sx={{ pt: 1, pl: 0.2, fontSize: 35 }} />
                </Link>
              </Box>
              <Box mb={2} className={styles.carousel_social_icons}>
                <Link
                  href="https://maps.app.goo.gl/wybojZjScHxctkba7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <LocationOnIcon sx={{ pt: 1, fontSize: 35 }} />
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            md={1}
            sx={{ display: { xs: "none", md: "flex" } }}
            alignItems="center"
            justifyContent="end"
          >
            <Box
              className={styles.carousel_arrow}
              onClick={() => handleNextSlide()}
            >
              <Box pl={0.5} pt={0.5}>
                <ArrowForwardIosOutlinedIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        alignItems="center"
        justifyContent="space-between"
        sx={{ mx: 4, display: { xs: "flex", md: "none" } }}
      >
        <Box display="flex">
          {carouselImages.map((slide, index) => (
            <Box
              key={index}
              onClick={() => setActiveSlide(index)}
              mx={1}
              className={styles.carousel_slide_indicator}
              sx={{
                backgroundColor:
                  index === activeSlide ? "#0ce1d5" : "rgba(255,255,255,0.7)",
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box
            mr={2}
            className={styles.carousel_arrow}
            onClick={() => handlePrevSlide()}
          >
            <Box pl={0.9} pt={0.5}>
              <ArrowBackIosIcon />
            </Box>
          </Box>

          <Box
            className={styles.carousel_arrow}
            onClick={() => handlePrevSlide()}
          >
            <Box pl={0.9} pt={0.5}>
              <ArrowForwardIosOutlinedIcon />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        {carouselImages.map((slide, index) => (
          <Box
            key={index}
            onClick={() => setActiveSlide(index)}
            mx={1}
            className={styles.carousel_slide_indicator}
            sx={{
              backgroundColor:
                index === activeSlide ? "#0ce1d5" : "rgba(255,255,255,0.7)",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselComponent;
