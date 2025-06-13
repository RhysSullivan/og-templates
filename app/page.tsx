"use client";
import * as React from "react";
import PreviewRenderer from "./preview";
import TemplateSelector from "@/components/template-selector";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackgroundForm } from "@/components/forms/background";
import { BasicOGForm } from "@/components/forms/basic";

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
          <BasicOGForm />

          <BackgroundForm />
        </div>

        <div className="order-first lg:order-last lg:col-span-2">
          <div className="sticky top-0 grow-0 space-y-4">
            <Card className="col-span-2 px-2 md:px-4">
              <div className="overflow-hidden">
                <PreviewRenderer />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
