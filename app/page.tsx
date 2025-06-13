"use client";
import * as React from "react";
import Link from "next/link";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { BasicOGComponent } from "@/registry/components/open-graph/basic";
import PreviewRenderer from "./preview";
import TemplateSelector from "@/components/template-selector";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyApiRequestButton } from "@/components/copy-api-request-button";
import { BackgroundForm } from "@/components/forms/background";
import SaveImageButton from "@/components/save-image-button";
import TemplateForm from "@/components/template-form";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState("basic");
  return (
    <div className="space-y-4">
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

      <Separator />

      <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
        <div className="order-last col-span-1 space-y-4 lg:order-first">
          <TemplateForm />

          <BackgroundForm />
        </div>

        <div className="order-first lg:order-last lg:col-span-2">
          <div className="sticky top-0 grow-0 space-y-4">
            <Card className="col-span-2 px-2 md:px-4">
              <div className="overflow-hidden">
                <PreviewRenderer>
                  <BasicOGComponent
                    background={{
                      type: "color",
                      color: "#000",
                      noise: 0.5,
                    }}
                    canvas={{ width: 1200, height: 630 }}
                    title={{
                      text: "Hello World",
                      fontFamily: "inter",
                      fontWeight: 700,
                      fontSize: 52,
                      color: "#fff",
                    }}
                    description={{
                      text: "This is a description",
                      fontFamily: "inter",
                      fontWeight: 400,
                      fontSize: 30,
                      color: "#fff",
                    }}
                    logo={{
                      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png",
                    }}
                  />
                </PreviewRenderer>
              </div>
            </Card>

            <Tabs defaultValue="save">
              <TabsList className="grid hidden grid-cols-2">
                <TabsTrigger value="save">Save Image</TabsTrigger>
                <TabsTrigger value="api">API Request</TabsTrigger>
              </TabsList>
              <TabsContent value="save">
                <Card>
                  <CardHeader>
                    <CardTitle>Save Image</CardTitle>
                    <CardDescription>
                      Export the image as a PNG.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between space-x-2">
                    <div className="flex items-center">
                      <InfoCircledIcon className="mr-2 h-4 w-4" />
                      <p className="text-sm">
                        <Button
                          className="h-auto p-0 underline"
                          variant="link"
                          asChild
                        >
                          <Link href="https://og.new/guides/open-graph-meta-tags">
                            Learn more
                          </Link>
                        </Button>{" "}
                        about Open Graph meta tags.
                      </p>
                    </div>

                    <SaveImageButton />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="api">
                <Card>
                  <CardHeader>
                    <CardTitle>API Request</CardTitle>
                    <CardDescription>
                      Generate Open Graph images on the fly with our API.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between space-x-2">
                    <div className="flex items-center">
                      <InfoCircledIcon className="mr-2 h-4 w-4" />
                      <p className="text-sm">
                        Copy the request body as JSON or a cURL command.
                      </p>
                    </div>

                    <CopyApiRequestButton />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
