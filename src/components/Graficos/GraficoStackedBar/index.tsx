import { FC } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import { formatAxis } from "../../../shared/formatAxis";
import * as S from "./styles";

interface GraficoProps {}

const GraficoStackedBar: FC<GraficoProps> = ({}) => {
  const resultado = [
    { date: "Jan", amount: 1303 },
    { date: "Fev", amount: 1654 },
    { date: "Mar", amount: 3454 },
    { date: "Abr", amount: 6774 },
    { date: "Mai", amount: 3566 },
    { date: "Jun", amount: 1650 },
    { date: "Jul", amount: 2466 },
    { date: "Ago", amount: 2356 },
    { date: "Set", amount: 1456 },
    { date: "Out", amount: 1800 },
    { date: "Nov", amount: 4000 },
    { date: "Dez", amount: 6909 },
  ];

  const resultado2 = [
    { date: "Jan", amount: 5467 },
    { date: "Fev", amount: 6789 },
    { date: "Mar", amount: 4567 },
    { date: "Abr", amount: 1124 },
    { date: "Mai", amount: 4567 },
    { date: "Jun", amount: 4478 },
    { date: "Jul", amount: 3567 },
    { date: "Ago", amount: 2345 },
    { date: "Set", amount: 5678 },
    { date: "Out", amount: 3567 },
    { date: "Nov", amount: 8899 },
    { date: "Dez", amount: 7899 },
  ];

  const resultado3 = [
    { date: "Jan", amount: 1101 },
    { date: "Fev", amount: 1467 },
    { date: "Mar", amount: 1278 },
    { date: "Abr", amount: 2456 },
    { date: "Mai", amount: 3556 },
    { date: "Jun", amount: 4566 },
    { date: "Jul", amount: 5567 },
    { date: "Ago", amount: 2335 },
    { date: "Set", amount: 4577 },
    { date: "Out", amount: 4678 },
    { date: "Nov", amount: 5778 },
    { date: "Dez", amount: 7990 },
  ];

  const dataList = [resultado, resultado2, resultado3];

  return (
    <S.Container>
      <VictoryChart
        width={1000}
        containerComponent={
          <VictoryVoronoiContainer
            responsive={false}
            voronoiDimension="x"
            labels={({ datum }) => datum.amount}
            voronoiBlacklist={["line"]}
            labelComponent={
              <VictoryTooltip cornerRadius={5} flyoutPadding={10} />
            }
          />
        }
        domainPadding={40}
        animate
      >
        <VictoryAxis
          dependentAxis={true}
          tickFormat={(value) => `${formatAxis(value)}`}
          orientation="left"
          style={{
            grid: { stroke: "#EEE" },
            axis: {
              strokeWidth: 0,
            },
            tickLabels: {
              fontSize: 12,
              fill: "gray",
            },
            axisLabel: {
              strokeWidth: 0,
              fill: "gray",
              fontSize: 14,
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: {
              strokeWidth: 0,
            },
          }}
        />
        <VictoryAxis
          dependentAxis={true}
          tickFormat={(value) => `${formatAxis(value)}`}
          orientation="right"
          style={{
            grid: { stroke: "#EEE" },
            axis: {
              strokeWidth: 0,
            },
            tickLabels: {
              fontSize: 12,
              fill: "gray",
            },
            axisLabel: {
              strokeWidth: 0,
              fill: "gray",
              fontSize: 14,
            },
          }}
        />

        <VictoryStack
          colorScale={["rgb(233,32,206)", "rgb(222,24,31)", "rgb(99,238,120)"]}
        >
          {dataList.map((item, index) => {
            return (
              <VictoryBar
                barRatio={0.25}
                key={index}
                data={item}
                x="date"
                y="amount"
                labelComponent={<VictoryTooltip />}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    </S.Container>
  );
};

export default GraficoStackedBar;
