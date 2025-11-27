import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import BookList from "../components/BookList.jsx";
import horrorBooks from "../horror.json";

describe("BookList Component Test", () => {
  // TEST 2
  it("should render as many bootstrap cards as books in the json file", () => {
    const mockOnSelectBook = () => {};
    const mockSelectedAsin = null;

    render(
      <BookList
        books={horrorBooks}
        onSelectBook={mockOnSelectBook}
        selectedAsin={mockSelectedAsin}
      />
    );

    //  bottoni "ACQUISTA"
    const buyButtons = screen.getAllByText(/ACQUISTA/i);

    // Il numero di bottoni deve essere uguale al numero di libri
    expect(buyButtons).toHaveLength(horrorBooks.length);
  });

  // TEST 4
  it("should filter books correctly when typing in the search bar", async () => {
    const mockOnSelectBook = () => {};
    const mockSelectedAsin = null;
    const user = userEvent.setup();

    render(
      <BookList
        books={horrorBooks}
        onSelectBook={mockOnSelectBook}
        selectedAsin={mockSelectedAsin}
      />
    );

    // tutti i libri
    const initialButtons = screen.getAllByText(/ACQUISTA/i);
    expect(initialButtons).toHaveLength(horrorBooks.length);

    // l'input
    const searchInput = screen.getByPlaceholderText(/Cerca il tuo libro/i);

    // qualcosa nell'input
    await user.type(searchInput, "Silent");

    // libri filtrati
    const filteredButtons = screen.getAllByText(/ACQUISTA/i);
    expect(filteredButtons.length).toBeLessThan(horrorBooks.length);

    expect(screen.getByText(/The Silent Corner/i)).toBeInTheDocument();
  });

  it("should show all books when search is empty", async () => {
    const mockOnSelectBook = () => {};
    const mockSelectedAsin = null;
    const user = userEvent.setup();

    render(
      <BookList
        books={horrorBooks}
        onSelectBook={mockOnSelectBook}
        selectedAsin={mockSelectedAsin}
      />
    );

    const searchInput = screen.getByPlaceholderText(/Cerca il tuo libro/i);

    await user.type(searchInput, "Test");
    await user.clear(searchInput);

    const allButtons = screen.getAllByText(/ACQUISTA/i);
    expect(allButtons).toHaveLength(horrorBooks.length);
  });

  it("should show no books when search matches nothing", async () => {
    const mockOnSelectBook = () => {};
    const mockSelectedAsin = null;
    const user = userEvent.setup();

    render(
      <BookList
        books={horrorBooks}
        onSelectBook={mockOnSelectBook}
        selectedAsin={mockSelectedAsin}
      />
    );

    const searchInput = screen.getByPlaceholderText(/Cerca il tuo libro/i);

    await user.type(searchInput, "Pupoooooo");

    const buttons = screen.queryAllByText(/ACQUISTA/i);
    expect(buttons).toHaveLength(0);
  });
});
