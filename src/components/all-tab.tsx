"use client";

import { Book } from "@/types/book";
import { Settings2 } from "lucide-react";
import BookGrid from "./books-grid";
import { useState } from "react";
import FilterSidebar from "./filter-sidebar";
import { Button } from "./ui/button";
import { Author } from "@/types/author";


export default function AllTab({ books, authors }: { books: Book[] | null, authors: Author[] | null }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleFilter = (genre: string, year: number | null) => {
    const filtered = books?.filter(
      (book) =>
        (genre === "All" || book.genre === genre) &&
        (year === null || book.year >= year),
    );
    setFilteredBooks(filtered || []);
  };

  return (
    <div className="flex p-2 flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm md:text-md">{books?.length} books listed</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            You can use the filters to find books faster.
          </p>
        </div>
        <Button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex justify-between gap-2 "
          disabled
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
        <BookGrid books={filteredBooks} authors={authors} />
      </div>
    </div>
  );
}
