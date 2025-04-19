import { Box, Container, Grid } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export interface Card {
  title: string;
  descriptions: string[];
}

export interface InfoHeroProps {
  imageUrl: string;
  title: string;
  cards: Card[];
}

const InfoHeroComponent: FC<InfoHeroProps> = ({ imageUrl, title, cards }) => {
  const [isInView, setIsInView] = useState(false); // State to track if component is in view
  const sectionRef = useRef<HTMLDivElement | null>(null); // Ref to the section element

  useEffect(() => {
    // Create the Intersection Observer instance
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

    // Cleanup the observer on component unmount
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
        backgroundImage: `linear-gradient(to right,rgba(42, 143, 156, 0.8),rgba(12, 225, 213, 0.8)), url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={sectionRef} // Attach the ref to the section element
      className={styles.main_hero}
    >
      <Container sx={{ py: 4, textAlign: "center" }} maxWidth="lg">
        <Box sx={{ lineBreak: "anywhere" }}>
          <h3 className={`${isInView ? styles.fadeInUp : ""}`}>{title}</h3>
        </Box>

        {/* Grid for the cards */}
        <Grid container spacing={3} sx={{ pb: 4 }}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <h4 className={`${isInView ? styles.fadeInUp : ""}`}>
                {card.title}
              </h4>
              <Box sx={{ textAlign: "left" }}>
                <ul>
                  {card.descriptions.map((desc, subIndex) => (
                    <Box key={subIndex} mt={3}>
                      <li className={`${isInView ? styles.fadeInUp : ""}`}>
                        <p>{desc}</p>
                      </li>
                    </Box>
                  ))}
                </ul>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InfoHeroComponent;
