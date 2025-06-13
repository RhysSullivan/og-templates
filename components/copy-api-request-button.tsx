"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CopyApiRequestButton() {
  const handleCopyJSON = () => {
    // TODO: Implement JSON copy functionality
    console.log("Copying JSON...");
  };

  const handleCopyCURL = () => {
    // TODO: Implement cURL copy functionality
    console.log("Copying cURL command...");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <CopyIcon className="mr-2 h-4 w-4" />
          Copy
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleCopyJSON}>
          Copy as JSON
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyCURL}>
          Copy as cURL
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
