import { Box, Tab, Tabs } from "@mui/material";
import React, { FC } from "react";
import GraficoStackedBar from "../components/Graficos/GraficoStackedBar";
import ListNotebooks from "../components/ListNotebooks";

interface IHome {}

const Home: FC<IHome> = () => {
  const [value, setValue] = React.useState(0);
  const [abaAtiva, setAbaAtiva] = React.useState(0);

  const conteudos = [<GraficoStackedBar />, <ListNotebooks />];

  const handleChange = (event: unknown, newValue: number) => {
    setAbaAtiva(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        variant="fullWidth"
        centered
      >
        <Tab
          value={0}
          sx={{
            maxWidth: "20rem",
            fontSize: "1rem",
            fontWeight: 400,
          }}
          label="Vendas Mensais"
        />
        <Tab
          value={1}
          sx={{
            maxWidth: "20rem",
            fontSize: "1rem",
            fontWeight: 400,
          }}
          label="Notebooks"
        />
      </Tabs>

      {conteudos[abaAtiva]}
    </Box>
  );
};

export default Home;
