import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Book } from "@/types/book";

interface BookDetailProps {
  book: Book;
}

export default function BookDetail({ book }: BookDetailProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <Card>
          <CardContent className="p-4">
            <Image
              src={book.coverImage == "" ? "/placeholder.svg" : book.coverImage}
              style={{ objectFit: "contain" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`Cover of ${book.title}`}
              width={300}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Reading</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-xl text-muted-foreground">by {book.author}</p>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <span>{book.genre}</span>
          <span>•</span>
          <span>{book.year}</span>
        </div>
        <p className="text-lg">{book.description}</p>
      </div>
    </div>
  );
}
