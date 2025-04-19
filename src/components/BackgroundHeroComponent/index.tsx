import { Box, Button, Container, Stack } from "@mui/material";
import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface BackgroundHeroProps {
  imageUrl: string;
  title: string;
  description: string;
  mainButtonLabel: string;
  secondaryButtonLabel: string;
}

const BackgroundHeroComponent: FC<BackgroundHeroProps> = ({
  imageUrl,
  title,
  description,
  mainButtonLabel,
  secondaryButtonLabel,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        minHeight: 500,
        height: "100vh",
        backgroundImage: `linear-gradient(to bottom, rgba(47,118,234,0.6), rgba(89,43,229,0.6)), url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={styles.main_hero}
    >
      <Container sx={{ pt: 10, textAlign: "center" }} maxWidth="md">
        <Box sx={{ lineBreak: "anywhere" }}>
          <h2>{title}</h2>
        </Box>
        <Box>
          <h5>{description}</h5>
        </Box>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">{mainButtonLabel}</Button>
          <Button variant="outlined" color="info">
            {secondaryButtonLabel}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default BackgroundHeroComponent;
