import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";
import AllTab from "./all-tab";
import MaktubaTab from "./maktuba-tab";
import MadbuhaTab from "./madbuha-tab";
import AuthorsTab from "./authors-tab";

export default function HomeTab() {
  return (
    <Tabs defaultValue="all" className="p-2 md:p-5">
      <TabsList className="mb-3">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="maktuba">Maktuba</TabsTrigger>
        <TabsTrigger value="madbuha">Madbuha</TabsTrigger>
        <TabsTrigger value="authors">Authors</TabsTrigger>
      </TabsList>
      <Separator className="mb-6" />
      <TabsContent value="all">
        <AllTab />
      </TabsContent>
      <TabsContent value="maktuba">
        <MaktubaTab />
      </TabsContent>
      <TabsContent value="madbuha">
        <MadbuhaTab />
      </TabsContent>
      <TabsContent value="authors">
        <AuthorsTab />
      </TabsContent>
    </Tabs>
  );
}
