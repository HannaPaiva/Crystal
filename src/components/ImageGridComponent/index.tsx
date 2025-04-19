import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Box } from "@mui/material";
import styles from "./styles.module.scss";

// Define a type for the props of the ImageGridComponent
export interface ImageGridComponentProps {
  title: string;
  images: string[];
}

const ImageGridComponent: React.FC<ImageGridComponentProps> = ({
  title,
  images,
}) => {
  const [isInView, setIsInView] = useState(false); // State to track if component is in view
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref to the section element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when the section is in view
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in view
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <div
      id="our_work"
      ref={sectionRef}
      className={`${styles.image_grid_section} ${isInView ? styles.fadeInUp : ""}`}
    >
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Box sx={{ lineBreak: "anywhere" }} pb={1}>
          <h3 className={`${styles.title} ${isInView ? styles.fadeInUp : ""}`}>
            {title}
          </h3>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Box
              className={`${styles.image_grid_item} ${isInView ? styles.fadeInUp : ""}`}
              sx={{
                backgroundImage: `url(${images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "416px", // Adjust based on your design
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              className={`${styles.image_grid_item} ${isInView ? styles.fadeInUp : ""}`}
              sx={{
                backgroundImage: `url(${images[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Adjust based on your design
              }}
            />
            <Box
              className={`${styles.image_grid_item} ${isInView ? styles.fadeInUp : ""}`}
              sx={{
                backgroundImage: `url(${images[2]})`,
                backgroundSize: "cover",
                marginTop: "16px",
                backgroundPosition: "center",
                height: "200px", // Adjust based on your design
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              className={`${styles.image_grid_item} ${isInView ? styles.fadeInUp : ""}`}
              sx={{
                backgroundImage: `url(${images[3]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Adjust based on your design
              }}
            />
            <Box sx={{ display: "flex" }}>
              <Box
                className={`${styles.image_grid_item} ${isInView ? styles.fadeInUp : ""}`}
                sx={{
                  backgroundImage: `url(${images[4]})`,
                  backgroundSize: "cover",
                  marginTop: "16px",
                  backgroundPosition: "center",
                  width: "48%",
                  height: "200px", // Adjust based on your design
                }}
              />
              <Box
                className={`${styles.image_grid_item} ${isInView ? styles.fadeInUp : ""}`}
                sx={{
                  backgroundImage: `url(${images[5]})`,
                  backgroundSize: "cover",
                  marginLeft: "18px",
                  marginTop: "16px",
                  backgroundPosition: "center",
                  width: "48%",
                  height: "200px", // Adjust based on your design
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageGridComponent;
