import React from "react";
import Size from "types/global";
import Rounded from "types/global";
import Variant from "types/global";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
  rounded?: Rounded;
  variant?: Variant;
  color?: "string";
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-red-500">
      {children}
    </button>
  );
};

export default Button;
