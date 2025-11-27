import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EpiAlert from "../components/EpiAlert.jsx";

describe("Welcome Component Test", () => {
  // TEST 1
  it("should render Welcome component correctly", () => {
    render(<EpiAlert />);

    // Uso un testo più specifico che appare una sola volta
    const subtitle = screen.getByText(/immergiti nel mondo dei libri/i);
    expect(subtitle).toBeInTheDocument();

    // Verifico anche il testo dell'alert
    const alertText = screen.getByText(/Guarda il nostro catalogo/i);
    expect(alertText).toBeInTheDocument();

    // Verifico che ci sia "Benvenuto" da qualche parte
    const welcome = screen.getAllByText(/Benvenuto in EpiBooks/i);
    expect(welcome.length).toBeGreaterThan(0);
  });
});
