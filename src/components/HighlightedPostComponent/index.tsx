import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";

interface HighlightedPostComponentProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function HighlightedPostComponent(
  props: HighlightedPostComponentProps,
) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
      }}
    >
      <Image
        fill
        style={{ display: "none" }}
        src={post.image}
        alt={post.imageText}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(89, 43, 229, 0.6), rgba(47, 118, 234, 0.6))",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              pl: 5,
              pb: 5,
            }}
          >
            <h4>{post.title}</h4>
            <p color="inherit">{post.description}</p>
            <Button color="info" size="small" variant="outlined">
              {post.linkText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
