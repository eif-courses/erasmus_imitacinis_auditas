/** server/uploadthing.ts */
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import {NextApiRequest, NextApiResponse} from "next/types";
const f = createUploadthing();
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f
        // Set permissions and file types for this FileRoute
        .fileTypes(["image", "video", "audio", "blob"])
        .maxSize("16MB")
        .middleware(async (req, res) => {
            // This code runs on your server before upload
            const user = await getServerSession(req, res, authOptions)

            // If you throw, the user will not be able to upload
            if (!user) throw new Error("Unauthorized");

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return { userId: user.user };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log("Upload complete for userId:", metadata.userId.id);

            console.log("file url", file.url);
        }),




} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
