import { AuthorsCard } from "@/components/authors-grid";
import { createClient } from "@/utils/supabase/server";
import { Settings2 } from "lucide-react";

export default async function Page() {
  const supabase = await createClient();
  const { data: books } = await supabase.from("books").select("*");
  const { data: authors } = await supabase.from("authors").select("*");

  return (
    <div className="flex p-2 flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm md:text-md">{authors?.length} authors listed</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            You can use the filters to find books faster.
          </p>
        </div>
        <div className="flex justify-between gap-2 text-muted-foreground">
          <p className="text-sm md:text-md">Filter</p>
          <p>
            <Settings2 className="w-5 h-5" />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {authors?.map((author) => (
          <div key={author.id}>
            <AuthorsCard author={author} books={books} />
          </div>
        ))}
      </div>
    </div>
  );
}
