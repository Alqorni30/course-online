"use client";
import { UploadButton } from "@/libs/uploadthing";
import Image from "next/image";
import { useState } from "react";

export default function Uploader() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <div className="">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      {imageUrl.length ? (
        <div className="mt-8">
          <Image
            src={imageUrl}
            alt="myimage"
            width={200}
            height={200}
            className="rounded-md"
          />
        </div>
      ) : null}
    </>
  );
}
