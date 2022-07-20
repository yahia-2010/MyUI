import React, { createContext } from "react";
import { ButtonProps } from "../Button/Button";
import Size from "types/global";
import Rounded from "types/global";
import Variant from "types/global";
import utils from "utils";

export const ButtonGroupContext = createContext(false as ButtonProps);

export interface ButtonGroupProps extends ContainerProps, TextProps {
  disabled?: boolean;
  size?: Size;
  rounded?: Rounded;
  variant?: Variant;
  bgColor?: string;
  spacing?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  style,
  disabled = false,
  size = "md",
  rounded = "sm",
  variant = "primary",
  bgColor = "default",
  textColor = "black",
  underlined = false,
  elevated = false,
  spacing = true,
}) => {
  return (
    <ButtonGroupContext.Provider
      value={{
        disabled,
        variant,
        underlined,
        textColor,
        bgColor,
        size,
        rounded,
      }}
    >
      <div
        className={`${className ? className : ""} ${utils.setElevated(
          elevated
        )} flex ${spacing ? "gap-x-[1.5px]" : ""}`}
        style={{ ...style }}
      >
        {children}
      </div>
    </ButtonGroupContext.Provider>
  );
};

export default ButtonGroup;
