import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should apply the right bg/text colors", () => {
    render(<Button bgColor="#ff0000" textColor="#00ff00" />);
    const button = screen.getByRole("button");
    expect(button.style.color).toBe("rgb(0, 255, 0)");
    expect(button.style.backgroundColor).toBe("rgb(255, 0, 0)");
  });

  it("should be elevated", () => {
    render(<Button elevated />);
    const button = screen.getByRole("button");
    expect(button.classList).toContain("drop-shadow-md");
  });

  it("should be disabled", () => {
    render(<Button disabled />);
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
  });

  it("should have transparent background", () => {
    render(<Button variant="text" />);
    const button = screen.getByRole("button");
    expect(button.style.backgroundColor).toBe("transparent");
  });

  it("should have icons", () => {
    render(<Button startIcon={<p>icon</p>} />);
    const icon = screen.queryByText("icon");
    expect(icon).toBeTruthy();
  });
});
