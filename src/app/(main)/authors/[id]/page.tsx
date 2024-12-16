import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Book } from "./_components/authors-books-list";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient();

  const { data: author } = await supabase
    .from("authors")
    .select()
    .eq("id", id)
    .single();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-4">
        <Link href="/authors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Authors
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
      <div className="">
        <Book id={author.id} />
      </div>
    </div>
  );
}
