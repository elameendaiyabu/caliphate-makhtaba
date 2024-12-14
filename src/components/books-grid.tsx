import { Book } from "@/types/book";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

interface BookGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <Card key={book.id} className="flex flex-col">
          <CardHeader>
            <Image
              src={book.coverImage == "" ? "/placeholder.svg" : book.coverImage}
              width={250}
              height={250}
              style={{ objectFit: "contain" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={book.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle className="text-lg mb-2">{book.title}</CardTitle>
            <p className="text-sm text-muted-foreground mb-2">
              by {book.author}
            </p>
            <p className="text-sm text-muted-foreground">
              {book.genre} • {book.year}
            </p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Link
              href={`/book/${book.id}`}
              className="w-full underline p-2 bg-background border hover:bg-muted flex justify-center rounded-md hover:text-emerald-400"
            >
              Read Now
            </Link>
            <Button variant="outline">
              <Heart className="hover:fill-red-500" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
