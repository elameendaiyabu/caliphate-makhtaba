import { Suspense } from "react";
import AdminBookList from "./_components/admin-book-list";
import AddBookForm from "./_components/admin-add-book";
import AddAuthorForm from "./_components/add-authors";
import { createClient } from "@/utils/supabase/server";
import { Book } from "@/types/book";
import { Author } from "@/types/author";

export default async function AdminPage() {
  const supabase = await createClient();

  const { data: books } = await supabase
    .from("books")
    .select(`id, title, author_id, genre, year, description, cover_image`)
    .returns<Book[]>();

  const { data: authors } = await supabase
    .from("authors")
    .select(`id, name, picture`)
    .returns<Author[]>();

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8">Book Admin</h1>
      <div className="">
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-4">Book List</h2>
            <div className="flex gap-2">
              <AddBookForm authors={authors} />
              <AddAuthorForm />
            </div>
          </div>
          <Suspense fallback={<div>Loading books...</div>}>
            <AdminBookList books={books} authors={authors} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
