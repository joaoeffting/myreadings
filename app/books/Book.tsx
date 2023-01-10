import Image from "next/image";
import React from "react";
import type { BookType } from "../../types/book.type";

const Book = ({ book }: { book: BookType }) => {
  return (
    <div>
      <Image src={book.cover} alt="book cover" width={160} height={100} />
    </div>
  );
};

export default Book;
