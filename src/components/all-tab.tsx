"use client";

import { Book } from "@/types/book";
import { Settings2 } from "lucide-react";
import BookGrid from "./books-grid";
import { useState } from "react";
import FilterSidebar from "./filter-sidebar";
import { Button } from "./ui/button";

const books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    year: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    year: 1949,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    year: 1925,
  },
  {
    id: 5,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
    year: 2008,
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    year: 1951,
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
  },
];

export default function AllTab() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleFilter = (genre: string, year: number | null) => {
    const filtered = books.filter(
      (book) =>
        (genre === "All" || book.genre === genre) &&
        (year === null || book.year >= year),
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="flex p-2 flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm md:text-md">12,342 books listed</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            You can use the filters to find books faster.
          </p>
        </div>
        <Button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex justify-between gap-2 "
        >
          <p className="text-sm md:text-md">Filter</p>
          <p>
            <Settings2 className="w-5 h-5" />
          </p>
        </Button>
      </div>
      <FilterSidebar
        isOpen={isSidebarOpen}
        setOpen={setIsSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onFilter={handleFilter}
      />
      <div>
        <BookGrid books={filteredBooks} />
      </div>
    </div>
  );
}
