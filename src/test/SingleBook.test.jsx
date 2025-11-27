import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SingleBook from "../components/SingleBook.jsx";

describe("SingleBook Component", () => {
  const mockBook = {
    asin: "0345546792",
    title: "The Silent Corner: A Novel of Suspense (Jane Hawk)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91dDIYze1wL.jpg",
    price: 7.92,
    category: "horror",
  };

  describe("Testing initial rendering and click border behavior", () => {
    it("should not have border initially and show border after click", async () => {
      const mockOnSelectBook = vi.fn();
      const user = userEvent.setup();

      // 1) Montare il componente
      const { rerender } = render(
        <SingleBook
          book={mockBook}
          onSelectBook={mockOnSelectBook}
          selectedAsin={null}
        />
      );

      // 2) Individuare elementi
      const cardImage = screen.getByRole("img");
      const card = cardImage.closest(".card");

      // 3) Verifica iniziale: nessun bordo
      expect(card).not.toHaveClass("border-warning");

      // 4) Interazione: click sulla card
      await user.click(card);
      expect(mockOnSelectBook).toHaveBeenCalledWith(mockBook.asin);

      // 5) Rerender con asin selezionato
      rerender(
        <SingleBook
          book={mockBook}
          onSelectBook={mockOnSelectBook}
          selectedAsin={mockBook.asin}
        />
      );

      // 6) Verifica: bordo giallo
      const selectedCard = screen.getByRole("img").closest(".card");
      expect(selectedCard).toHaveClass("border-warning");
    });
  });

  describe("Testing selection among multiple books", () => {
    it("should remove border from first book when second book is selected", () => {
      const mockBook1 = {
        asin: "0345546792",
        title: "The Silent Corner",
        img: "https://example.com/img1.jpg",
        price: 7.92,
        category: "horror",
      };

      const mockBook2 = {
        asin: "0735218994",
        title: "Celtic Empire",
        img: "https://example.com/img2.jpg",
        price: 17.32,
        category: "horror",
      };

      const mockOnSelectBook = vi.fn();

      // 1) Montaggio iniziale di entrambe le card
      const { rerender } = render(
        <div>
          <SingleBook
            book={mockBook1}
            onSelectBook={mockOnSelectBook}
            selectedAsin={mockBook1.asin}
          />
          <SingleBook
            book={mockBook2}
            onSelectBook={mockOnSelectBook}
            selectedAsin={mockBook1.asin}
          />
        </div>
      );

      // 2) Individuazione card
      const allImages = screen.getAllByRole("img");
      const card1 = allImages[0].closest(".card");
      const card2 = allImages[1].closest(".card");

      // 3) Verifica iniziale: primo selected, secondo non selezionato
      expect(card1).toHaveClass("border-warning");
      expect(card2).not.toHaveClass("border-warning");

      // 4) Rerender selezionando il secondo libro
      rerender(
        <div>
          <SingleBook
            book={mockBook1}
            onSelectBook={mockOnSelectBook}
            selectedAsin={mockBook2.asin}
          />
          <SingleBook
            book={mockBook2}
            onSelectBook={mockOnSelectBook}
            selectedAsin={mockBook2.asin}
          />
        </div>
      );

      // 5) Individuazione aggiornata
      const updatedImages = screen.getAllByRole("img");
      const updatedCard1 = updatedImages[0].closest(".card");
      const updatedCard2 = updatedImages[1].closest(".card");

      // 6) Verifica finale: primo non selezionato, secondo selezionato
      expect(updatedCard1).not.toHaveClass("border-warning");
      expect(updatedCard2).toHaveClass("border-warning");
    });
  });
});
