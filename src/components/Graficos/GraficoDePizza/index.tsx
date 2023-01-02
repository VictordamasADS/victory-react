import { FC } from "react";
import { VictoryPie } from "victory";
import { itens } from "../../../shared";
import * as S from "./styles";

interface IGraficoDePizza {
    typeItem: "notebooks" | "celulares"
}

const GraficoDePizza: FC<IGraficoDePizza> = ({
    typeItem
}) => {
    return (
        <S.Field>
            <VictoryPie 
                data={[
                    {
                        x: typeItem === "celulares" ? 
                            itens.eletronicos.celulares[0].marca : itens.eletronicos.notebooks[0].marca,
                        y: typeItem === "celulares" ? 
                            itens.eletronicos.celulares[0].quantidade : itens.eletronicos.notebooks[0].quantidade,
                    },
                    {
                        x: typeItem === "celulares" ? 
                            itens.eletronicos.celulares[1].marca : itens.eletronicos.notebooks[1].marca,
                        y: typeItem === "celulares" ? 
                            itens.eletronicos.celulares[1].quantidade : itens.eletronicos.notebooks[1].quantidade,
                    },
                    {
                        x: typeItem === "celulares" ? 
                            itens.eletronicos.celulares[2].marca : itens.eletronicos.notebooks[2].marca,
                        y: typeItem === "celulares" ? 
                            itens.eletronicos.celulares[2].quantidade : itens.eletronicos.notebooks[2].quantidade,
                    },
                ]}
                colorScale={[
                    typeItem === "celulares" ? itens.eletronicos.celulares[0].color : itens.eletronicos.notebooks[0].color,
                    typeItem === "celulares" ? itens.eletronicos.celulares[1].color : itens.eletronicos.notebooks[1].color,
                    typeItem === "celulares" ? itens.eletronicos.celulares[2].color : itens.eletronicos.notebooks[2].color,
                ]}
                labelRadius={50}
                style={{
                    labels: {
                        fill: "#000",
                        fontWeight: "bold",
                    },
                }}
            />
        </S.Field>
    )
}

export default GraficoDePizza