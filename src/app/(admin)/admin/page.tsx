import AddEditBookForm from "@/components/admin-add-book";
import AdminBookList from "@/components/admin-book-list";
import { Suspense } from "react";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Book Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Book List</h2>
          <Suspense fallback={<div>Loading books...</div>}>
            <AdminBookList />
          </Suspense>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Book</h2>
          <AddEditBookForm />
        </div>
      </div>
    </div>
  );
}
