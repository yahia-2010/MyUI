import React from "react";

export {};

declare global {
  type Size = "sm" | "md" | "lg";
  type Rounded = "sm" | "md" | "lg" | "full";
  type Variant = "primary" | "text" | "outlined";
  type Color = "default" | "red" | "blue" | "green" | "yellow" | "gray";

  interface Props {
    style?: React.CSSProperties;
    className?: string;
  }
  interface ContainerProps extends Props {
    children?: React.ReactNode;
    elevated?: boolean;
  }

  interface ClickableProps extends ContainerProps {
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    disabled?: boolean;
  }

  interface TextProps extends ContainerProps {
    textColor?: string;
    underlined?: boolean;
  }
}
