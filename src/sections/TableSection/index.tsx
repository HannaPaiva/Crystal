import React, { useState } from "react";
import { TextField, Box, Button, Grid } from "@mui/material";
import TableComponent from "@/components/TableComponent";

// const data = [
//   { id: 1, name: "John Doe", age: 25 },
//   { id: 2, name: "Jane Smith", age: 30 },
//   { id: 3, name: "Michael Johnson", age: 28 },
//   { id: 4, name: "Emily Davis", age: 22 },
//   { id: 5, name: "William Brown", age: 35 },
//   { id: 6, name: "Olivia Wilson", age: 27 },
//   { id: 7, name: "James Taylor", age: 31 },
//   { id: 8, name: "Sophia Miller", age: 29 },
//   { id: 9, name: "Benjamin Anderson", age: 24 },
//   { id: 10, name: "Ava Martinez", age: 26 },
//   { id: 11, name: "Ethan Garcia", age: 23 },
//   { id: 12, name: "Isabella Lee", age: 32 },
//   { id: 13, name: "Liam Hernandez", age: 33 },
//   { id: 14, name: "Mia Smith", age: 28 },
//   { id: 15, name: "Noah Johnson", age: 30 },
//   { id: 16, name: "Emma Davis", age: 31 },
//   { id: 17, name: "Oliver Brown", age: 29 },
//   { id: 18, name: "Ava Wilson", age: 27 },
//   { id: 19, name: "Elijah Taylor", age: 25 },
//   { id: 20, name: "Sophia Miller", age: 24 },
//   { id: 21, name: "Lucas Anderson", age: 26 },
//   { id: 22, name: "Charlotte Martinez", age: 23 },
//   { id: 23, name: "Alexander Garcia", age: 28 },
//   { id: 24, name: "Amelia Lee", age: 32 },
//   { id: 25, name: "Henry Hernandez", age: 31 },
//   { id: 26, name: "Ella Smith", age: 27 },
//   { id: 27, name: "Daniel Johnson", age: 29 },
//   { id: 28, name: "Sofia Davis", age: 30 },
//   { id: 29, name: "Matthew Brown", age: 33 },
//   { id: 30, name: "Avery Wilson", age: 28 },
// ];

// const columns = [
//   { id: "name", label: "Name" },
//   { id: "age", label: "Age" },
// ];

const TableSection = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
  };

  return (
    <Box>
      <Box sx={{ pb: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={10}>
            <TextField
              sx={{ width: "100%" }}
              color="primary"
              label="Procurar"
              size="small"
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button sx={{ width: "100%" }} color="primary" variant="contained">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TableComponent searchText={searchText} />
      </Box>
    </Box>
  );
};

export default TableSection;
