import NotLoggedIn from "@/components/not-logged-in";
import { createClient } from "@/utils/supabase/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user == null) {
    return <NotLoggedIn />
  }

  return <main className="w-full">{children}</main>;
}
