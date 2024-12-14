import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  onFilter: (genre: string, year: number | null) => void;
}

export default function FilterSidebar({
  isOpen,
  setOpen,
  onClose,
  onFilter,
}: SidebarProps) {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleFilter = () => {
    onFilter(selectedGenre, selectedYear);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : " hidden -translate-x-full"} w-[300px] sm:w-full bg-background border-r transition-transform duration-300 ease-in-out z-20 md:relative md:translate-x-0`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="md:hidden"
          aria-label="Close sidebar"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Genre
            </label>
            <Select onValueChange={(value) => setSelectedGenre(value)}>
              <SelectTrigger id="genre">
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Genres</SelectItem>
                <SelectItem value="Classic">Classic</SelectItem>
                <SelectItem value="Science Fiction">Science Fiction</SelectItem>
                <SelectItem value="Romance">Romance</SelectItem>
                <SelectItem value="Young Adult">Young Adult</SelectItem>
                <SelectItem value="Fantasy">Fantasy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Published After
            </label>
            <Select
              onValueChange={(value) =>
                setSelectedYear(value === "any" ? null : parseInt(value))
              }
            >
              <SelectTrigger id="year">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Year</SelectItem>
                <SelectItem value="1900">1900</SelectItem>
                <SelectItem value="1950">1950</SelectItem>
                <SelectItem value="2000">2000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={() => {
              handleFilter();
              setOpen(false);
            }}
            className="w-full"
          >
            Apply Filters
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
