import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@supabase/supabase-js";

export default function ProfileTab({ user }: { user: User | null }) {
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Update your account profile information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue={user?.email} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="createdAt">Created At:</Label>
            <p className="text-sm bg-muted p-2 rounded-md">
              {user?.created_at}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastLogin">Last Login:</Label>
            <p className="text-sm bg-muted p-2 rounded-md">
              {user?.last_sign_in_at}
            </p>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
