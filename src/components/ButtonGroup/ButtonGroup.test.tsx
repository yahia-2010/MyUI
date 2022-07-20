import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";
import Button from "../Button";

const MockGroup = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
);

describe("ButtonGroup", () => {
  it("should render multiple buttons", () => {
    render(<MockGroup />);
  });

  it("children buttons should inherit properties", () => {
    render(<MockGroup bgColor="rgb(255, 0, 0)" />);
    const button = screen.getByRole("button", { name: "Button 1" });
    expect(button.style.backgroundColor).toBe(/rgb(255, 0, 0)/);
  });
});
