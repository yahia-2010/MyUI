import React from "react";
import Size from "types/global";
import Rounded from "types/global";
import Variant from "types/global";
import utils from "utils";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} flex justify-center items-center transition ${
        size === "sm"
          ? "text-sm py-1 px-2"
          : size === "lg"
          ? "text-lg py-3.5 px-5"
          : "text-base py-2.5 px-4"
      } ${utils.setRounded(rounded)} ${utils.setElevated(
        elevated
      )} ${utils.setUnderlined(
        underlined
      )} disabled:opacity-70 hover:opacity-90 active:opacity-100`}
      style={{
        ...style,
        backgroundColor:
          variant !== "primary" ? "transparent" : utils.setBgColor(bgColor),
        color: utils.setTextColor(textColor),
        border:
          variant === "outlined"
            ? `1.5px solid ${utils.setBgColor(bgColor)}`
            : "",
      }}
    >
      {startIcon && (
        <span
          className={`${
            size === "sm" ? "mr-1.5" : size === "lg" ? "mr-4" : "mr-3"
          }`}
        >
          {startIcon}
        </span>
      )}
      <span>{children || "Button"}</span>
      {endIcon && (
        <span
          className={`${
            size === "sm" ? "ml-1.5" : size === "lg" ? "ml-4" : "ml-3"
          }`}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
