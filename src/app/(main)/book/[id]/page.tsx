"use client";

import BookDetail from "@/components/book-detail";

// Mock function to fetch book data
// In a real app, this would be an API call
const book = {
  id: 1,
  title: "To Kill a Mockingbird",
  author_id: "Harper Lee",
  genre: "Classic",
  year: 1960,
  description:
    "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
  cover_image:
    "/placeholder.svg?height=400&width=300&text=To+Kill+a+Mockingbird",
  book: "",
};

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <BookDetail book={book} />
      </main>
    </div>
  );
}
