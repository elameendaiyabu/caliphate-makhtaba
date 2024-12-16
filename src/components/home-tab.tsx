import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";
import AllTab from "./all-tab";
import MaktubaTab from "./maktuba-tab";
import MadbuhaTab from "./madbuha-tab";
import AuthorsTab from "./authors-tab";
import { Book } from "@/types/book";
import { Author } from "@/types/author";

export default function HomeTab({ books, authors }: { books: Book[] | null, authors: Author[] | null }) {
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
        <AllTab books={books} authors={authors} />
      </TabsContent>
      <TabsContent value="maktuba">
        <MaktubaTab books={books} authors={authors} />
      </TabsContent>
      <TabsContent value="madbuha">
        <MadbuhaTab books={books} authors={authors} />
      </TabsContent>
      <TabsContent value="authors">
        <AuthorsTab books={books} authors={authors} />
      </TabsContent>
    </Tabs>
  );
}
