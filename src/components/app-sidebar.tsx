"use client";

import {
  Home,
  Flame,
  BookmarkCheck,
  Heart,
  Settings,
  Info,
  LogIn,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Popular",
    url: "/popular",
    icon: Flame,
  },
  {
    title: "My Library",
    url: "/mylibrary",
    icon: BookmarkCheck,
  },
  {
    title: "Favourite",
    url: "/favourite",
    icon: Heart,
  },
];

const footerItems = [
  {
    title: "Settings",
    url: "/account",
    icon: Settings,
  },
  {
    title: "Help",
    url: "/help",
    icon: Info,
  },
];

export function AppSidebar({ user }: { user: User | null }) {
  const pathname = usePathname();

  const index = items.map((e) => e.url).indexOf(pathname);
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Caliphate Maktaba</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem className="mt-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className={cn(
                        "flex items-center gap-3 rounded-sm px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                        currentIndex === index && "bg-muted text-primary",
                      )}
                      onClick={() => setCurrentIndex(index)}
                      href={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-3 mt-2">
          <Separator />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item) => (
                <SidebarMenuItem className="mt-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {user == null ? (
                <SidebarMenuItem className="mt-2">
                  <SidebarMenuButton asChild>
                    <Link href="/auth/signin">
                      <LogIn />
                      <span>Sign In</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                <form method="post" action="/auth/signout">
                  <SidebarMenuItem className="mt-2">
                    <SidebarMenuButton asChild>
                      <Button
                        type="submit"
                        className="justify-start"
                        variant="ghost"
                      >
                        <LogOut />
                        <span>Log Out</span>
                      </Button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </form>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
