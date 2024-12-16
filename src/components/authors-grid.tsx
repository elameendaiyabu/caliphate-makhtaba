"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, User } from "lucide-react";
import { Author } from "@/types/author";
import { Book as bookType } from "@/types/book";
import Link from "next/link";
import Image from "next/image";

export function AuthorsCard({
  author,
  books,
}: {
  author: Author | null;
  books: bookType[] | null;
}) {
  const bookCount = books?.filter(
    (book) => parseInt(book.author_id) == author?.id,
  );

  return (
    <Card className="flex justify-between">
      <div className="">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2" />
            {author?.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <Book className="mr-2" />
            <span>{bookCount?.length} books</span>
          </div>
          <Link
            href={`/authors/${author?.id}`}
            className="text-emerald-700 hover:underline"
          >
            View Books
          </Link>
        </CardContent>
      </div>
      <div className="">
        <Image
          src={author?.picture == null ? "/placeholder.svg" : author.picture}
          width={80}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          height={120}
          alt={`picture of ${author?.name}`}
          className="w-full h-40 object-cover rounded-full border"
        />
      </div>
    </Card>
  );
}
