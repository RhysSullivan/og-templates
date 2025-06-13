"use client";
import * as React from "react";
import PreviewRenderer from "./preview";
import TemplateSelector, { templates } from "@/components/template-selector";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackgroundForm } from "@/components/forms/background";
import { BasicOGForm } from "@/components/forms/basic";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTemplateStore } from "@/components/template-store";

function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<keyof typeof templates>("basic");
  const { template } = useTemplateStore();
  const info = templates[selectedTemplate];

  const shadcnCommand = `bunx --bun shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${selectedTemplate}.json`;
  const usageCode = `import { ${
    info.componentName
  } } from "@/components/open-graph/${selectedTemplate}";
import { renderOgToImage } from "@/lib/render";

export default function OpenGraphImage() {
  return renderOgToImage(
    <${info.componentName}
      params={${JSON.stringify(template.params, null, 6)}}
    />,
    {
      width: ${template.params.canvas?.width ?? 1200},
      height: ${template.params.canvas?.height ?? 630},
      allText: '',
    }
  );
}`;

  return (
    <div className="space-y-4">
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={(template) =>
          setSelectedTemplate(template as keyof typeof templates)
        }
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

            <Card className="col-span-2 px-4 md:px-6">
              <div className="space-y-6 py-4">
                <h3 className="text-lg font-semibold">Installation & Usage</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Install the component:
                    </p>
                    <CopyButton text={shadcnCommand} />
                  </div>
                  <div className="relative">
                    <SyntaxHighlighter
                      language="bash"
                      style={vs}
                      customStyle={{
                        margin: 0,
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontFamily:
                          'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      }}
                    >
                      {shadcnCommand}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Use in your Open Graph image route:
                    </p>
                    <CopyButton text={usageCode} />
                  </div>
                  <div className="relative">
                    <SyntaxHighlighter
                      language="tsx"
                      style={vs}
                      customStyle={{
                        margin: 0,
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontFamily:
                          'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      }}
                    >
                      {usageCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
