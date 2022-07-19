import React from "react";
import Size from "types/global";
import Rounded from "types/global";
import Variant from "types/global";
import globals from "../../styles/globals";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
  rounded?: Rounded;
  variant?: Variant;
  bgColor?: string;
  textColor?: string;
  elevated?: boolean;
  disabled?: boolean;
  underlined?: boolean;
  style?: React.CSSProperties;
  className?: string;
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
        underlined ? "underline" : ""
      } ${elevated ? "drop-shadow-md" : ""} ${
        size === "sm"
          ? "text-sm py-1 px-2"
          : size === "lg"
          ? "text-lg py-3.5 px-5"
          : "text-base py-2.5 px-4"
      } ${
        rounded === "md"
          ? "rounded-md"
          : rounded === "lg"
          ? "rounded-lg"
          : rounded === "full"
          ? "rounded-full"
          : "rounded-[3px]"
      } disabled:opacity-70 hover:opacity-90 active:opacity-100`}
      style={{
        ...style,
        backgroundColor:
          variant !== "primary"
            ? "transparent"
            : Object.keys(globals.colors).includes(bgColor)
            ? (globals.colors as any)[bgColor]
            : bgColor,
        color: Object.keys(globals.colors).includes(textColor)
          ? (globals.colors as any)[textColor]
          : textColor,
        border:
          variant === "outlined"
            ? `1.5px solid ${
                Object.keys(globals.colors).includes(bgColor)
                  ? (globals.colors as any)[bgColor]
                  : bgColor
              }`
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
