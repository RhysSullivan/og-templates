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
import { Textarea } from "@/components/ui/textarea";

export default function TemplateForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Configuration</CardTitle>
        <CardDescription>
          Customize the content of your Open Graph image
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter title"
            defaultValue="Hello World"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter description"
            defaultValue="This is a description"
            rows={3}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="logo-url">Logo URL</Label>
          <Input
            id="logo-url"
            type="url"
            placeholder="https://example.com/logo.png"
            defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png"
          />
        </div>
      </CardContent>
    </Card>
  );
}
