import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import styles from "./styles.module.scss";

export interface CardComponentProps {
  variant?: "vertical" | "horizontal";
  date?: string;
  description?: string;
  image?: string;
  imageLabel?: string;
  title?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  variant,
  title = "Missing Text",
  date,
  description,
  image = "https://source.unsplash.com/random?wallpapers",
  imageLabel,
}) => {
  return (
    <>
      {variant === "vertical" ? (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia component="div" sx={{ pt: "56.25%" }} image={image} />
          <CardContent sx={{ flexGrow: 1 }}>
            <h6 className={styles.card_heading}>{title}</h6>
            <Box py={0.5}>
              <span className={styles.card_date}>{date}</span>
            </Box>
            <p className={styles.card_text}>{description}</p>
          </CardContent>
        </Card>
      ) : (
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <h6 className={styles.card_heading}>{title}</h6>
              <span className={styles.card_date}>{date}</span>
              <p className={styles.card_text}>{description}</p>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: 160,
                display: { xs: "none", sm: "block" },
                background:
                  "linear-gradient(to left, rgba(47,118,234,0.7), rgba(89,43,229,0.7)",
              }}
              image={image}
              alt={imageLabel}
            />
          </Card>
        </CardActionArea>
      )}
    </>
  );
};

export default CardComponent;
