import { Settings2 } from "lucide-react";

export default function AuthorsTab() {
  return (
    <div className="flex p-2 flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm md:text-md">34 authors listed</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            You can use the filters to find books faster.
          </p>
        </div>
        <div className="flex justify-between gap-2 text-muted-foreground">
          <p className="text-sm md:text-md">Filter</p>
          <p>
            <Settings2 className="w-5 h-5" />
          </p>
        </div>
      </div>
    </div>
  );
}
