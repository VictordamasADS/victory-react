export function formatAxis(value: any) {
  const axisFormatted = Intl.NumberFormat("pt-br", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

  if (value === "") {
    return " ";
  }

  return axisFormatted;
}
