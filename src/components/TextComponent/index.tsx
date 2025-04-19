import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MarkdownComponent from "../MarkdownComponent";

interface TextComponentProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function TextComponent(props: TextComponentProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <MarkdownComponent className="markdown" key={post.substring(0, 40)}>
          {post}
        </MarkdownComponent>
      ))}
    </Grid>
  );
}
