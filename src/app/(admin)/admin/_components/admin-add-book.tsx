"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Author } from "@/types/author";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SyntheticEvent, useCallback, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { ToastAction } from "@/components/ui/toast";
import { useDropzone } from "@uploadthing/react";
import { useUploadThing } from "@/utils/uploadthing";
import { useToast } from "@/hooks/use-toast";

export default function AddBookForm({ authors }: { authors: Author[] | null }) {
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      let book: string, coverImg;
      if (res.length == 2) {
        if (res[0].type == "application/pdf") {
          book = res[0].url;
          coverImg = res[1].url;
          addBook(book, coverImg);
        } else if (res[0].type == "image/png" || res[0].type == "image/jpeg") {
          coverImg = res[0].url;
          book = res[1].url;
          addBook(book, coverImg);
        }
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Uploaded more than two items",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    },
    onUploadError: (err) => {
      console.log(err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem uploading cover image.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
    onUploadBegin: () => {
      toast({
        description: "Upload in progress",
      });
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const addCoverImg = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (files.length > 0) {
      startUpload(files);
    }
  };

  const addBook = async (book: string, coverImg: string) => {
    const supabase = createClient();
    //get author id
    const { data } = await supabase
      .from("authors")
      .select("id")
      .eq("name", author)
      .single()

    console.log(data);
    const { error } = await supabase.from("books").insert({
      title: title,
      author_id: data?.id,
      genre: genre,
      year: parseInt(year),
      description: description,
      cover_image: coverImg,
      book: book,
    });

    if (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem adding book. Try again!",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    toast({
      description: "Book added successful",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
        </DialogHeader>
        <form
          className="grid md:grid-cols-2 gap-4 py-4"
          onSubmit={(e) => addCoverImg(e)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right col-span-1">
              Authors
            </Label>
            <div className="col-span-3">
              <Select onValueChange={setAuthor}>
                <SelectTrigger id="select-author">
                  <SelectValue placeholder="Select Author" />
                </SelectTrigger>
                <SelectContent>
                  {authors?.map((author) => (
                    <SelectItem value={author.name} key={author.id}>
                      {author.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genre" className="text-right">
              Genre
            </Label>
            <Input
              id="genre"
              name="genre"
              onChange={(e) => setGenre(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="year" className="text-right">
              Year
            </Label>
            <Input
              id="year"
              name="year"
              onChange={(e) => setYear(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 justify-between items-center gap-4">
            <Label htmlFor="book" className="text-right col-span-1">
              Book
            </Label>
            <div className="col-span-3">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {files.length > 0 && <p>Upload {files.length} files</p>}
                <p className="bg-blue-700 p-2 text-white text-center rounded-md">
                  Select book and cover image here!
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isUploading}>
              Add Book
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
