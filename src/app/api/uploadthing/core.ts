import { createUploadthing, type FileRouter } from "uploadthing/next";
//import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 2 },
    pdf: { maxFileSize: "16MB", maxFileCount: 2 },
  })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for user");

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { message: "upload complete" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
