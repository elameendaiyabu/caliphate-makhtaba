"use client";

import { Book } from "@/types/book";
import BookGrid from "./books-grid";
import { Author } from "@/types/author";

export default function MaktubaTab({
  books,
  authors,
}: {
  books: Book[] | null;
  authors: Author[] | null;
}) {
  const filteredBooks = books
    ? books?.filter((book) => book.genre == "maktuba")
    : [];
  return (
    <div className="flex p-2 flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm md:text-md">{filteredBooks.length} books listed</p>
        </div>
      </div>
      <div>
        <BookGrid books={filteredBooks} authors={authors} />
      </div>
    </div>
  );
}
