import { FC } from "react";
import { VictoryBar, VictoryChart, VictoryLabel } from "victory";
import { itens } from "../../../shared";
import * as S from "./styles";

interface IGraficoDeBarra {
    typeItem: "notebooks" | "celulares"
}

const GraficoDeBarra: FC<IGraficoDeBarra> = ({
    typeItem
}) => {
    return (
        <S.Field>
            <VictoryChart domainPadding={18} animate>
                <VictoryBar
                    data={[
                        {
                            x: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[0].marca : itens.eletronicos.notebooks[0].marca,
                            y: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[0].quantidade : itens.eletronicos.notebooks[0].quantidade,
                            fill: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[0].color : itens.eletronicos.notebooks[0].color,
                        },
                        {
                            x: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[1].marca : itens.eletronicos.notebooks[1].marca,
                            y: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[1].quantidade : itens.eletronicos.notebooks[1].quantidade,
                            fill: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[1].color : itens.eletronicos.notebooks[1].color,
                        },
                        {
                            x: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[2].marca : itens.eletronicos.notebooks[2].marca,
                            y: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[2].quantidade : itens.eletronicos.notebooks[2].quantidade,
                            fill: typeItem === "celulares" ? 
                                itens.eletronicos.celulares[2].color : itens.eletronicos.notebooks[2].color,
                        },
                    ]}
                    style={{
                        labels: {
                            fill: "black",
                            fontWeight: "bold",
                        },
                        data: {
                            fill: ({ datum }) => datum.fill,
                        },
                    }}
                    labelComponent={<VictoryLabel dy={-20} />}
                />
            </VictoryChart>
        </S.Field>  
    )
}

export default GraficoDeBarra