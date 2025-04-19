import { Box, Container, Grid } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export interface Card {
  title: string;
  descriptions: string[];
}

export interface ColoredCardsProps {
  imageUrl: string;
  title: string;
  cards: Card[];
}

const ColoredCardsComponent: FC<ColoredCardsProps> = ({ title, cards }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        minHeight: 500,
      }}
      pb={4}
      ref={sectionRef}
      className={styles.main_hero}
    >
      <Container sx={{ my: 4, textAlign: "center" }} maxWidth="lg">
        <Box sx={{ lineBreak: "anywhere" }} mb={7}>
          <h3 className={`${isInView ? styles.fadeInUp : ""}`}>{title}</h3>
        </Box>

        <Grid container sx={{ mb: 4 }}>
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              md={3}
              sm={6}
              pb={4}
              key={index}
              className={
                index % 2 === 0 ? styles.cards_darker : styles.cards_lighter
              }
            >
              <h4 className={`${isInView ? styles.fadeInUp : ""}`}>
                {card.title}
              </h4>
              <Box sx={{ textAlign: "left" }}>
                {card.descriptions.map((desc, subIndex) => (
                  <Box key={subIndex} px={4} mt={3}>
                    <h6 className={`${isInView ? styles.fadeInUp : ""}`}>
                      {desc}
                    </h6>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ColoredCardsComponent;
