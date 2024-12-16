import PDFViewer from "./_components/pdf-viewer";

export default async function Page({
  params,
}: {
  params: Promise<{ book: string }>;
}) {
  const { book } = await params;
  console.log(book);
  return (
    <div className="">
      <PDFViewer pdfUrl={decodeURIComponent(book)} />
    </div>
  );
}
