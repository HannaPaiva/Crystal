import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  Box,
} from "@mui/material";

const data = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Michael Johnson", age: 28 },
  { id: 4, name: "Emily Davis", age: 22 },
  { id: 5, name: "William Brown", age: 35 },
  { id: 6, name: "Olivia Wilson", age: 27 },
  { id: 7, name: "James Taylor", age: 31 },
  { id: 8, name: "Sophia Miller", age: 29 },
  { id: 9, name: "Benjamin Anderson", age: 24 },
  { id: 10, name: "Ava Martinez", age: 26 },
  { id: 11, name: "Ethan Garcia", age: 23 },
  { id: 12, name: "Isabella Lee", age: 32 },
  { id: 13, name: "Liam Hernandez", age: 33 },
  { id: 14, name: "Mia Smith", age: 28 },
  { id: 15, name: "Noah Johnson", age: 30 },
  { id: 16, name: "Emma Davis", age: 31 },
  { id: 17, name: "Oliver Brown", age: 29 },
  { id: 18, name: "Ava Wilson", age: 27 },
  { id: 19, name: "Elijah Taylor", age: 25 },
  { id: 20, name: "Sophia Miller", age: 24 },
  { id: 21, name: "Lucas Anderson", age: 26 },
  { id: 22, name: "Charlotte Martinez", age: 23 },
  { id: 23, name: "Alexander Garcia", age: 28 },
  { id: 24, name: "Amelia Lee", age: 32 },
  { id: 25, name: "Henry Hernandez", age: 31 },
  { id: 26, name: "Ella Smith", age: 27 },
  { id: 27, name: "Daniel Johnson", age: 29 },
  { id: 28, name: "Sofia Davis", age: 30 },
  { id: 29, name: "Matthew Brown", age: 33 },
  { id: 30, name: "Avery Wilson", age: 28 },
];

const columns = [
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
];

const TableComponent = ({ searchText }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleRequestSort = (property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const sortedData = filteredData.sort((a: any, b: any) => {
    const isAsc = order === "asc";
    return isAsc
      ? a[orderBy] > b[orderBy]
        ? 1
        : -1
      : b[orderBy] > a[orderBy]
        ? 1
        : -1;
  });

  const handleChangePage = (_: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : "asc"}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => (
                  <TableRow key={row.id}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default TableComponent;
