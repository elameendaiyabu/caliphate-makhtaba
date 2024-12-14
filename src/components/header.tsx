"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";

export default function Header() {
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
						<Button variant="ghost" size="icon" aria-label="Profile">
							<User className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
