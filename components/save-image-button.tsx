"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";

export default function SaveImageButton() {
  const handleSaveImage = () => {
    // TODO: Implement image saving functionality
    console.log("Saving image...");
  };

  return (
    <Button onClick={handleSaveImage} size="sm">
      <DownloadIcon className="mr-2 h-4 w-4" />
      Save as PNG
    </Button>
  );
}
