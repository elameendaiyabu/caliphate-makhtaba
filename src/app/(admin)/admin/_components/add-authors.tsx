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
import { useUploadThing } from "@/utils/uploadthing";
import { SyntheticEvent, useCallback, useState } from "react";
import { useDropzone } from "@uploadthing/react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddAuthorForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [name, setName] = useState<string>("");

  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      addAuthor(res[0].url);
    },
    onUploadError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem uploading image.",
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

  const AddPicture = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (files.length > 0) {
      startUpload(files);
    }
  };

  const addAuthor = async (img: string) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("authors")
      .insert({ name: name, picture: img });

    if (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem adding author. Try again!",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    toast({
      description: "Author added successful",
    });
    revalidatePath("/admin");
    redirect("/");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Author</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Author</DialogTitle>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={(e) => {
            AddPicture(e);
          }}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 justify-between items-center gap-4">
            <Label htmlFor="authorImg" className="text-right col-span-1">
              Author Image
            </Label>
            <div className="col-span-2">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {files.length > 0 && <p>Upload {files.length} files</p>}
                <p className="bg-blue-700 p-2 text-white text-center rounded-md">
                  Select image here!
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isUploading}>
              Add Author
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
