import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book as bookType } from "@/types/book";
import { createClient } from "@/utils/supabase/server";
import { ArrowRight, CalendarIcon } from "lucide-react";
import Link from "next/link";

interface BookProps {
  id: number;
}

export async function Book({ id }: BookProps) {
  const supabase = await createClient();

  const { data: books } = await supabase
    .from("books")
    .select()
    .eq("author_id", id)
    .returns<bookType[]>();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {books?.map((book) => (
        <Card key={book.id}>
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Published in {book.year}</span>
            </div>
            <Link
              href={`/book/${book.id}`}
              className="flex text-emerald-700 underline items-center text-sm "
            >
              <span>View Book</span>
              <ArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
