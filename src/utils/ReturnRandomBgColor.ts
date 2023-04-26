export function returnRandomBgColor(index: number) {
  const bgColor = [
    "#8C8CBA",
    "#0088B3",
    "#07847E",
    "#633BBC",
    "#9A00B3",
    "#B38C00",
  ];

  if (index >= bgColor.length) {
    return bgColor[index % bgColor.length];
  }

  return bgColor[index];
}
