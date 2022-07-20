/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from "react";
import { ButtonGroupContext } from "../ButtonGroup/ButtonGroup";
import Size from "types/global";
import Rounded from "types/global";
import Variant from "types/global";
import utils from "utils";

export interface ButtonProps extends ClickableProps, TextProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: Size;
  rounded?: Rounded;
  variant?: Variant;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "md",
  bgColor = "default",
  textColor = "black",
  disabled = false,
  elevated = false,
  rounded = "sm",
  variant = "primary",
  underlined = false,
  className = "",
  startIcon,
  endIcon,
  style = {},
}) => {
  const groupProps = useContext(ButtonGroupContext);
  const props = {
    size: groupProps ? groupProps.size : size,
    bgColor: groupProps ? groupProps.bgColor : bgColor,
    textColor: groupProps ? groupProps.textColor : textColor,
    disabled: groupProps ? groupProps.disabled : disabled,
    variant: groupProps ? groupProps.variant : variant,
    underlined: groupProps ? groupProps.underlined : underlined,
  };

  return (
    <button
      disabled={props.disabled}
      onClick={onClick}
      className={`${
        className ? className : ""
      } transition flex justify-center items-center ${
        props.size === "sm"
          ? "text-sm py-1 px-2 gap-x-1.5"
          : props.size === "lg"
          ? "text-lg py-3.5 px-5 gap-x-4"
          : "text-base py-2.5 px-4 gap-x-3"
      } ${
        !groupProps
          ? utils.setRounded(rounded)
          : `${
              groupProps.rounded === "md"
                ? "first:rounded-l-md last:rounded-r-md"
                : groupProps.rounded === "lg"
                ? "first:rounded-l-lg last:rounded-r-lg"
                : groupProps.rounded === "full"
                ? "first:rounded-l-full last:rounded-r-full"
                : "first:rounded-l-[3px] last:rounded-r-[3px]"
            }`
      } ${utils.setElevated(elevated)} ${utils.setUnderlined(
        props.underlined
      )} disabled:opacity-70 hover:opacity-90 active:opacity-100`}
      style={{
        ...style,
        backgroundColor:
          props.variant === "primary"
            ? utils.setBgColor(props.bgColor!)
            : "transparent",
        color: utils.setTextColor(props.textColor!),
        border:
          props.variant === "outlined"
            ? `1.5px solid ${utils.setBgColor(props.bgColor!)}`
            : groupProps
            ? "border"
            : "",
      }}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children || "Button"}</span>
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
