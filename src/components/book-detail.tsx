import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Book } from "@/types/book";
import Link from "next/link";
import { Author } from "@/types/author";
import { Download } from "lucide-react";

interface BookDetailProps {
  book: Book | null;
  authors: Author[] | null;
}

export default function BookDetail({ book, authors }: BookDetailProps) {
  const url = book?.book == null ? "" : book.book;
  const encodedURL = encodeURIComponent(url);

  const findAuthorById = (authorId: string) =>
    authors?.find((author) => author.id == parseInt(authorId));

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-4">
            <Image
              src={
                book?.cover_image == null || ""
                  ? "/placeholder.svg"
                  : book?.cover_image
              }
              style={{ objectFit: "contain" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`Cover of ${book?.title}`}
              width={300}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </CardContent>
          <CardFooter className="grid gap-1 w-full grid-cols-4">
            <Link
              href={`/book/${book?.id}/read/${encodedURL}`}
              className="w-full p-2 rounded-md text-center col-span-3 hover:text-white bg-accent hover:bg-accent-foreground"
            >
              Start Reading
            </Link>
            <Link
              href={`${book?.book}`}
              className="w-full p-2 rounded-md text-center flex justify-center hover:text-white bg-accent hover:bg-accent-foreground"
            >
              <Download />
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold">{book?.title}</h1>
        {book?.author_id && (
          <p className="text-xl text-muted-foreground">
            by {findAuthorById(book.author_id)?.name}{" "}
          </p>
        )}
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <span>{book?.genre}</span>
          <span>•</span>
          <span>{book?.year}</span>
        </div>
        <p className="text-lg">{book?.description}</p>
      </div>
    </div>
  );
}
