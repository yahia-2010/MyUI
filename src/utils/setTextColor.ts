import globals from "styles/globals";

const setTextColor = (textColor: string): string => {
  return Object.keys(globals.colors).includes(textColor)
    ? (globals.colors as never)[textColor]
    : textColor;
};

export default setTextColor;
