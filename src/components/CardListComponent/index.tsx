import * as React from "react";
import Grid from "@mui/material/Grid";
import CardComponent, { CardComponentProps } from "@/components/CardComponent";
import { Container, Pagination } from "@mui/material";
import { useState } from "react";

interface CardListComponentProps {
  cards: CardComponentProps[];
}

export default function CardListComponent({ cards }: CardListComponentProps) {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {cards.slice(startIndex, endIndex).map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <CardComponent {...card} variant="horizontal" />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          "& .MuiPagination-ul": {
            listStyle: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiPaginationItem-root": {
            color: "#0ce1d5",
            margin: "0 5px",
            "&.Mui-selected": {
              fontWeight: "bold",
            },
            "&.MuiPaginationItem-icon": {
              color: "#0ce1d5",
            },
          },
        }}
      />
    </Container>
  );
}
