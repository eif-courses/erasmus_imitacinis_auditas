import { UploadButton, UploadDropzone} from "@uploadthing/react";
import type { OurFileRouter } from "~/server/uploadthing";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// You need to import our styles for the button to look right. Best to import in the root /_app.tsx but this is fine
import "@uploadthing/react/styles.css";

export default function UploadForm() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-4xl font-bold text-center">
          {`Upload a file using a button:`}
        </span>

                <UploadButton<OurFileRouter>
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-4xl font-bold text-center">
          {`...or using a dropzone:`}
        </span>
                <UploadDropzone<OurFileRouter>
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
        </main>
    );
}
