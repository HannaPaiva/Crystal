import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Avatar,
  ButtonBase,
} from "@mui/material";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import styles from "./styles.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

// Define the type for a single feedback
interface Feedback {
  name: string;
  avatar?: string; // URL for the avatar image
  rating: number; // Rating from 0 to 5
  review: string;
}

// Props for the FeedbacksComponent component
export interface FeedbacksComponentProps {
  feedbacks: Feedback[];
}

const FeedbacksComponent: React.FC<FeedbacksComponentProps> = ({
  feedbacks,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Render stars based on the rating value
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < rating) return <Star key={i} color="primary" />;
      if (i + 0.5 === rating) return <StarHalf key={i} color="primary" />;
      return <StarBorder key={i} color="primary" />;
    });
  };

  // Navigate to the previous feedback
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1,
    );
  };

  // Navigate to the next feedback
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className={styles.feedbacks_carousel}>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Box sx={{ textAlign: "center" }} mb={6}>
          <Typography variant="h4" gutterBottom color="primary">
            Feedbacks dos Alunos
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Veja o que nossos alunos dizem sobre nosso trabalho!
          </Typography>
        </Box>

        <div className={styles.carousel_container}>
          <div
            className={styles.carousel_inner}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            {feedbacks.map((feedback, index) => (
              <div className={styles.carousel_item} key={index}>
                <Card className={styles.feedback_card}>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        src={feedback.avatar}
                        alt={feedback.name}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Typography variant="h6">{feedback.name}</Typography>
                    </Box>
                    <Typography variant="body1" color="textSecondary" mb={2}>
                      {feedback.review}
                    </Typography>
                    <Box>{renderStars(feedback.rating)}</Box>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <ButtonBase
            aria-label="Previous"
            className={styles.arrow}
            onClick={prevSlide}
          >
            <ArrowBackIosIcon />
          </ButtonBase>
          <ButtonBase
            aria-label="Next"
            className={styles.arrow}
            onClick={nextSlide}
          >
            <ArrowForwardIosOutlinedIcon />
          </ButtonBase>
        </div>
      </Container>
    </div>
  );
};

export default FeedbacksComponent;
