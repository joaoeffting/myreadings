import React from "react";
import Book from "./Book";
import { BOOKS_API } from "../../constants";
import type { BookType } from "../../types/book.type";

async function getBooks(): Promise<BookType[]> {
  const res = await fetch(BOOKS_API);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

const Books = async () => {
  const books = await getBooks();
  return (
    <div>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};

export default Books;
