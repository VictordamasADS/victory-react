import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { itens } from "../../shared";
import GraficoDeBarra from "../Graficos/GraficoDeBarra";
import GraficoDePizza from "../Graficos/GraficoDePizza";
import * as S from "./styles";

interface IListNotebooks {}

const ListNotebooks: FC<IListNotebooks> = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [changeGrafico, setChangeGrafico] = useState([
    <GraficoDePizza typeItem="notebooks" />,
    <GraficoDeBarra typeItem="notebooks" />,
  ]);
  const [index, setIndex] = useState(0);

  const handleChangeGrafico = (grafico: any) => {
    setChangeGrafico((graficosList) => {
      if (index < 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }

      return [...graficosList, grafico];
    });
  };

  return (
    <Grid container sx={{ display: "flex", alignItems: "flex-start" }}>
      <Grid
        item
        xs={12}
        md={6}
        sm={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {changeGrafico[index]}

        <S.Button onClick={() => handleChangeGrafico(changeGrafico[index])}>
          Alterar Gráfico
        </S.Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sm={12}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          mt: smDown ? "2rem" : "6rem",
        }}
      >
        {itens.eletronicos.notebooks.map((data) => (
          <Box
            key={data.id}
            sx={{
              backgroundColor: "#EFEFEF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "60%",
              gap: "2rem",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              borderLeft: `5px solid ${data.color}`,
              overflow: "hidden",
              overflowX: "scroll",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <Typography fontWeight="600" whiteSpace="nowrap">
                Nome:
              </Typography>
              <Typography whiteSpace="nowrap">{data.nome}</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <Typography fontWeight="600" whiteSpace="nowrap">
                Preço:
              </Typography>
              <Typography whiteSpace="nowrap">{data.preco}</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <Typography fontWeight="600" whiteSpace="nowrap">
                Quantidade:
              </Typography>
              <Typography whiteSpace="nowrap">{data.quantidade}</Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ListNotebooks;
