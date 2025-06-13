"use client";
import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { BasicOGComponent } from "@/registry/components/open-graph/basic";
import PreviewRenderer from "./preview";
import {
  BasicSkeleton,
  NoticeSkeleton,
  HeroSkeleton,
  ImageRightSkeleton,
  LogosSkeleton,
} from "@/components/skeletons";

const templates = [
  {
    skeleton: <BasicSkeleton />,
    tag: "basic",
  },
  {
    skeleton: <NoticeSkeleton />,
    tag: "notice",
  },
  {
    skeleton: <HeroSkeleton />,
    tag: "hero",
  },
  {
    skeleton: <ImageRightSkeleton />,
    tag: "image-right",
  },
  {
    skeleton: <LogosSkeleton />,
    tag: "logos",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <main className="flex flex-col flex-1 gap-8 pt-16">
        <div className="flex flex-row gap-4 items-center justify-center">
          {templates.map((template) => (
            <div
              key={template.tag}
              className="border rounded-lg p-4 w-[230px] h-[130px]"
            >
              {template.skeleton}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="basic" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
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
