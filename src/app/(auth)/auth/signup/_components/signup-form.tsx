"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FolderGitIcon } from "lucide-react";
import { signup } from "../action";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  //async function onSubmit(event: React.SyntheticEvent) {
  //    event.preventDefault();
  //    setIsLoading(true);

  //    setTimeout(() => {
  //        setIsLoading(false);
  //    }, 3000);
  //}

  return (
    <div
      className={cn("w-full flex flex-col p-5 justify-center gap-6", className)}
      {...props}
    >
      <form action={signup}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              autoCorrect="off"
            />
          </div>
          <Button>Sign Up with Email</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        <FolderGitIcon className="mr-2 h-4 w-4" /> GitHub
      </Button>
    </div>
  );
}
