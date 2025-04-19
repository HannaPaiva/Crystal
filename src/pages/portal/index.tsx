import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SchoolIcon from "@mui/icons-material/School";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ExtensionIcon from "@mui/icons-material/Extension";
import QuizIcon from "@mui/icons-material/Quiz";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PortalMenuComponent from "@/components/PortalMenuComponent";
import { useState } from "react";
import CardListSection from "@/sections/CardListSection";
import DashboardSection from "@/sections/DashboardSection";
import TableSection from "@/sections/TableSection";

export default function Portal() {
  const [section, setSection] = useState<any>(<CardListSection />);

  const items = {
    accordionItems: [
      {
        title: "Turmas",
        icon: <SchoolIcon />,
        items: [
          {
            title: "Visualizar Turmas",
            icon: <ViewListIcon />,
            onClick: () => setSection(<CardListSection />),
          },
        ],
      },
      {
        title: "Alunos",
        icon: <PeopleIcon />,
        items: [
          {
            title: "Visualizar Alunos",
            icon: <ViewListIcon />,
            onClick: () => setSection(<TableSection />),
          },
          {
            title: "Cadastrar Alunos",
            icon: <AddIcon />,
          },
        ],
      },
      {
        title: "Quizzes",
        icon: <ExtensionIcon />,
        items: [
          {
            title: "Meus Quizzes",
            icon: <ViewListIcon />,
          },
          {
            title: "Cadastrar Quizzes",
            icon: <AddIcon />,
          },
          {
            title: "Questões",
            icon: <QuizIcon />,
          },
          {
            title: "Cadastrar Questões",
            icon: <AddIcon />,
          },
        ],
      },
      {
        title: "Relatórios",
        icon: <DashboardIcon />,
        items: [
          {
            title: "Meus Relatórios",
            icon: <BarChartIcon />,
            onClick: () => setSection(<DashboardSection />),
          },
          {
            title: "Criar Relatórios",
            icon: <AddIcon />,
          },
        ],
      },
    ],
    menuItems: [
      {
        title: "Perfil",
        icon: <AccountCircleIcon />,
      },
      {
        title: "Configurações",
        icon: <SettingsIcon />,
      },
    ],
  };

  return (
    <Box sx={{ display: "flex" }}>
      <PortalMenuComponent items={items} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ overflowY: "hidden", mt: 4, mb: 4 }}>
          {section}
        </Container>
      </Box>
    </Box>
  );
}
