"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { User as userType } from "@supabase/supabase-js";
import Link from "next/link";

export default function Header({ user }: { user: userType | null }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement your search logic here
  };

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="grid px-1 md:hidden">
            <SidebarTrigger />
          </div>
          <form onSubmit={handleSearch} className="flex-grow max-w-md">
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </form>
          <div className="flex items-center space-x-4 ml-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            {user == null ? (
              <></>
            ) : (
              <Button variant="ghost" size="icon" aria-label="Profile">
                <Link href="/account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
