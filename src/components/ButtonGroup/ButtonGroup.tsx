import React from "react";
import Size from "types/global";
import Rounded from "types/global";
import Variant from "types/global";
import globals from "styles/globals";

export interface ButtonGroupProps extends ContainerProps {
  disabled?: boolean;
  size?: Size;
  rounded?: Rounded;
  variant?: Variant;
  bgColor?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { colors } = globals;

  return (
    <div
      className={`${props.className} overflow-hidden`}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
};

export default ButtonGroup;
