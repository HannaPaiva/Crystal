import React, { useState, useEffect, useRef } from "react";
import { Container, Stack, Button, Box } from "@mui/material";
import styles from "./styles.module.scss";
import Link from "next/link";

// Define a type for the props of the HeroComponent
export interface HeroComponentProps {
  title: string;
  description: string;
  mainCTA?: string;
  secondaryCTA?: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  title,
  description,
  mainCTA,
  secondaryCTA,
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
      ref={sectionRef}
      className={`${styles.main_hero} ${isInView ? styles.fadeInUp : ""}`}
    >
      <Container sx={{ py: 4, textAlign: "center" }} maxWidth="lg">
        <Box
          className={`${styles.main_hero_title} ${isInView ? styles.fadeInUp : ""}`}
        >
          <h3>{title}</h3>
        </Box>
        <div>
          <h5 className={`${isInView ? styles.fadeInUp : ""}`}>
            {description}
          </h5>
        </div>

        <Stack
          sx={{ py: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {mainCTA && (
            <Link href="https://venda.nextfit.com.br/aa0ea082-309d-4518-aa33-8c4486a18861/contratos">
              <Button
                variant="contained"
                className={isInView ? styles.fadeInUp : ""}
                sx={{ color: "#fff" }}
              >
                {mainCTA}
              </Button>
            </Link>
          )}
          {secondaryCTA && (
            <Button
              variant="outlined"
              className={isInView ? styles.fadeInUp : ""}
            >
              {secondaryCTA}
            </Button>
          )}
        </Stack>
      </Container>
    </div>
  );
};

export default HeroComponent;
