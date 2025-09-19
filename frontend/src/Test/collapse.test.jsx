import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Collapse from "../Components/Collapse";

describe("Collapse Component", () => {
  const title = "Titre test";
  const text = "Contenu visible après ouverture";

  test("rend le titre et le contenu (fermé par défaut)", () => {
    render(<Collapse title={title} text={text} />);

   
    expect(screen.getByText(title)).toBeInTheDocument();

   
    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
    expect(content).not.toHaveClass("Out");

  
    const arrow = screen.getByRole("button");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveClass("Up");
  });

  test("au clic la flèche et le contenu changent de classes", () => {
    render(<Collapse title={title} text={text} />);
    const arrow = screen.getByRole("button");
    const content = screen.getByText(text);

    
    fireEvent.click(arrow);
    expect(arrow).toHaveClass("Down");
    expect(content).toHaveClass("Out");

   
    fireEvent.click(arrow);
    expect(arrow).toHaveClass("Up");
    expect(content).not.toHaveClass("Out");
  });
});