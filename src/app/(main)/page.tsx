import HomeTab from "@/components/home-tab";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: books } = await supabase.from("books").select("*");
  const { data: authors } = await supabase.from("authors").select("*");

  return (
    <div className="w-full">
      <HomeTab books={books} authors={authors} />
    </div>
  );
}
