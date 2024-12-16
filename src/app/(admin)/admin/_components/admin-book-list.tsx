"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Author } from "@/types/author";
import { Book } from "@/types/book";
import { Pencil } from "lucide-react";
import Image from "next/image";

export default function AdminBookList({
  books,
  authors,
}: {
  books: Book[] | null;
  authors: Author[] | null;
}) {
  const findAuthorById = (authorId: string) =>
    authors?.find((author) => author.id == parseInt(authorId));

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cover</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <Image
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Cover of ${book.title}`}
                  width={100}
                  height={150}
                  loading="lazy"
                  src={
                    book.cover_image == ""
                      ? "/placeholder.svg"
                      : book.cover_image
                  }
                />
              </TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{`${findAuthorById(book.author_id)?.name}`}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
