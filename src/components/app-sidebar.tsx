import {
	Home,
	Flame,
	BookmarkCheck,
	Heart,
	Settings,
	Info,
	LogIn,
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

// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Popular",
		url: "#",
		icon: Flame,
	},
	{
		title: "My Library",
		url: "#",
		icon: BookmarkCheck,
	},
	{
		title: "Favourite",
		url: "#",
		icon: Heart,
	},
];

const footerItems = [
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
	{
		title: "Help",
		url: "#",
		icon: Info,
	},
	{
		title: "Sign In",
		url: "#",
		icon: LogIn,
	},
];

export function AppSidebar() {
	return (
		<Sidebar variant="sidebar">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Caliphate Maktaba</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem className="mt-2" key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
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
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
