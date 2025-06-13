import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { BasicOGComponent } from "@/registry/components/open-graph/basic";
import PreviewRenderer from "./preview";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PreviewRenderer>
              <BasicOGComponent
                background={{
                  type: "color",
                  color: "#fff",
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
        </div>
        {/* 
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div> */}
      </main>
    </div>
  );
}
