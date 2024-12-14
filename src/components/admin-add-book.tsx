"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Book } from "@/types/book";

export default function AddEditBookForm({ book }: { book?: Book }) {
  const [formData, setFormData] = useState({
    title: book?.title || "",
    author: book?.author || "",
    description: book?.description || "",
    coverFile: null as File | null,
    pdfFile: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to save the book data
    console.log("Form data submitted:", formData);
    // Reset form after submission
    setFormData({
      title: "",
      author: "",
      description: "",
      coverFile: null,
      pdfFile: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="coverFile">Cover Image</Label>
        <Input
          id="coverFile"
          name="coverFile"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      <div>
        <Label htmlFor="pdfFile">PDF File</Label>
        <Input
          id="pdfFile"
          name="pdfFile"
          type="file"
          onChange={handleFileChange}
          accept=".pdf"
        />
      </div>
      <Button type="submit">{book ? "Update Book" : "Add Book"}</Button>
    </form>
  );
}
