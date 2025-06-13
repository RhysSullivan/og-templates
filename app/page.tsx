"use client";
import * as React from "react";
import { BasicOGComponent } from "@/registry/components/open-graph/basic";
import PreviewRenderer from "./preview";
import TemplateSelector from "@/components/template-selector";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BasicOGForm } from "@/components/forms/basic";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState("basic");
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <main className="flex flex-col flex-1 gap-8 pt-16">
        <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
          <div className="order-last col-span-1 space-y-4 lg:order-first">
            <BasicOGForm />
          </div>

          <div className="order-first lg:order-last lg:col-span-2">
            <div className="sticky top-0 grow-0 space-y-4">
              <Card className="col-span-2 p-2 px-4">
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
