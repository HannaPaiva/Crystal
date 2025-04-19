import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Import Google Map icon
import Link from "next/link";

interface MapComponentProps {
  description: string;
  linkText: string;
  title: string;
  mapEmbedUrl: string;
}

export default function MapComponent({
  description,
  linkText,
  title,
  mapEmbedUrl,
}: MapComponentProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 4, position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "600px", md: "400px" }, // 600px on small devices, 400px on medium and up
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
            borderRadius: 1,
          }}
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundImage:
              "linear-gradient(to right,rgba(42, 143, 156, 0.6),rgba(12, 225, 213, 0.6))",
            zIndex: 1,
            borderRadius: 1,
          }}
        />

        <Grid
          container
          sx={{ position: "relative", zIndex: 2, height: "100%" }}
        >
          <Grid
            item
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              px: 5,
            }}
          >
            <Box mb={5}>
              <h4 style={{ color: "white", fontSize: "2rem", margin: 0 }}>
                {title}
              </h4>
              <p style={{ color: "white", fontSize: "1.2rem" }}>
                {description}
              </p>
            </Box>
            <Link
              href="https://maps.app.goo.gl/1XDMFt6N1zRvXYmYA"
              target="_blank"
            >
              <Button
                color="info"
                variant="contained"
                sx={{
                  color: "#0ce1d5",
                  backgroundColor: "info.main",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#0ce1d5",
                  },
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
                startIcon={<LocationOnIcon />}
                aria-label="Open in Google Maps"
              >
                {linkText}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
