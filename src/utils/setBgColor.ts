import globals from "styles/globals";

const setBgColor = (bgColor: string): string => {
  return Object.keys(globals.colors).includes(bgColor)
    ? (globals.colors as never)[bgColor]
    : bgColor;
};

export default setBgColor;
