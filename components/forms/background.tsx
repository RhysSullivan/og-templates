"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function BackgroundForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Background</CardTitle>
        <CardDescription>
          Customize the background of your Open Graph image
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="background-color">Background Color</Label>
          <Input
            id="background-color"
            type="text"
            placeholder="#000000"
            defaultValue="#000000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="noise">Noise Level</Label>
          <Input
            id="noise"
            type="number"
            placeholder="0.5"
            defaultValue="0.5"
            min="0"
            max="1"
            step="0.1"
          />
        </div>
      </CardContent>
    </Card>
  );
}
