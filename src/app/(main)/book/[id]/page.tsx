import BookDetail from "@/components/book-detail";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient();

  const { data: book } = await supabase
    .from("books")
    .select()
    .eq("id", id)
    .single();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <BookDetail book={book} />
      </main>
    </div>
  );
}
