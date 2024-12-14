import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";

export default function HomeTab() {
	return (
		<Tabs defaultValue="account" className="p-2 md:p-5">
			<TabsList>
				<TabsTrigger value="all">All</TabsTrigger>
				<TabsTrigger value="maktuba">Maktuba</TabsTrigger>
				<TabsTrigger value="madbuha">Madbuha</TabsTrigger>
				<TabsTrigger value="authors">Authors</TabsTrigger>
			</TabsList>
			<Separator />
			<TabsContent value="all">Make changes to your all here.</TabsContent>
			<TabsContent value="maktuba">Change your maktuba here.</TabsContent>
			<TabsContent value="madbuha">Change your madbuha here.</TabsContent>
			<TabsContent value="authors">Change your authors here.</TabsContent>
		</Tabs>
	);
}
