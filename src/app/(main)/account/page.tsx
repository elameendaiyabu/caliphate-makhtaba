import { createClient } from "@/utils/supabase/server";
import AccountSettings from "./_components/account-settings";

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <div className="px-5 md:px-8">
      <AccountSettings user={user} />
    </div>
  );
}
