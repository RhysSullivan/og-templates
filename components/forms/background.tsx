"use client";

import * as React from "react";
import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopLeftIcon,
  ArrowTopRightIcon,
  ArrowUpIcon,
  BorderAllIcon,
  DotsHorizontalIcon,
  GridIcon,
  ValueNoneIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTemplateStore } from "../template-store";
import {
  BackgroundParams,
  GradientDirection,
  GridOverlayParams,
  toBackgroundShorthand,
} from "@/registry/lib/parameters";

const solidColors = [
  // red/pink
  "#D14D72",
  "#FF8080",
  "#FF9B9B",
  "#FFABAB",
  "#E8A0BF",
  "#FEBBCC",
  "#FCC8D1",
  "#FFC5C5",

  // orange/yellow
  "#D3756B",
  "#F0997D",
  "#FEBE8C",
  "#FFC3A1",
  "#FFD966",
  "#F2D388",
  "#FCE38A",
  "#FFF6BD",

  // blue/purple
  "#67729D",
  "#7C93C3",
  "#8EA7E9",
  "#95BDFF",
  "#A084DC",
  "#B2A4FF",
  "#DBC4F0",
  "#E5D1FA",

  // green
  "#61876E",
  "#609966",
  "#A6BB8D",
  "#ABC4AA",

  // browns
  "#967E76",
  "#D7C0AE",
  "#EEE3CB",
  "#FFF3E2",

  // gray
  "#525E75",
  "#545B77",
  "#7B8FA1",
  "#9E9FA5",

  // black/white
  "#000000",
  "#FFFFFF",
];

const linearGradients = [
  // red/orange/yellow
  {
    colorStops: ["rgb(236, 72, 153)", "rgb(239, 68, 68)", "rgb(234, 179, 8)"],
  },
  {
    colorStops: ["rgb(202, 138, 4)", "rgb(220, 38, 38)"],
  },
  {
    colorStops: ["rgb(244, 63, 94)", "rgb(248, 113, 113)", "rgb(239, 68, 68)"],
  },
  {
    colorStops: ["rgb(253, 164, 175)", "rgb(244, 63, 94)"],
  },
  {
    colorStops: ["rgb(251, 146, 60)", "rgb(251, 113, 133)"],
  },
  {
    colorStops: ["rgb(251, 113, 133)", "rgb(253, 186, 116)"],
  },
  {
    colorStops: [
      "rgb(254, 202, 202)",
      "rgb(252, 165, 165)",
      "rgb(254, 240, 138)",
    ],
  },
  {
    colorStops: [
      "rgb(199, 210, 254)",
      "rgb(254, 202, 202)",
      "rgb(254, 249, 195)",
    ],
  },

  // blue/purple
  {
    colorStops: [
      "rgb(134, 239, 172)",
      "rgb(59, 130, 246)",
      "rgb(147, 51, 234)",
    ],
  },
  {
    colorStops: ["rgb(134, 239, 172)", "rgb(192, 132, 252)"],
  },
  {
    colorStops: ["rgb(192, 132, 252)", "rgb(250, 204, 21)"],
  },
  {
    colorStops: ["rgb(165, 180, 252)", "rgb(192, 132, 252)"],
  },
  {
    colorStops: [
      "rgb(249, 168, 212)",
      "rgb(216, 180, 254)",
      "rgb(129, 140, 248)",
    ],
  },
  {
    colorStops: [
      "rgb(233, 213, 255)",
      "rgb(192, 132, 252)",
      "rgb(107, 33, 168)",
    ],
  },
  {
    colorStops: [
      "rgb(219, 234, 254)",
      "rgb(147, 197, 253)",
      "rgb(59, 130, 246)",
    ],
  },
  {
    colorStops: ["rgb(165, 243, 252)", "rgb(34, 211, 238)"],
  },

  // green
  {
    colorStops: ["rgb(34, 197, 94)", "rgb(21, 128, 61)"],
  },
  {
    colorStops: ["rgb(16, 185, 129)", "rgb(101, 163, 13)"],
  },
  {
    colorStops: ["rgb(96, 165, 250)", "rgb(52, 211, 153)"],
  },
  {
    colorStops: ["rgb(187, 247, 208)", "rgb(74, 222, 128)", "rgb(34, 197, 94)"],
  },
  {
    colorStops: ["rgb(187, 247, 208)", "rgb(34, 197, 94)"],
  },
  {
    colorStops: [
      "rgb(187, 247, 208)",
      "rgb(134, 239, 172)",
      "rgb(59, 130, 246)",
    ],
  },
  {
    colorStops: ["rgb(153, 246, 228)", "rgb(217, 249, 157)"],
  },
  {
    colorStops: [
      "rgb(254, 240, 138)",
      "rgb(187, 247, 208)",
      "rgb(134, 239, 172)",
    ],
  },

  // gray
  {
    colorStops: ["#434343 0%", "black 100%"],
  },
  {
    colorStops: ["rgb(17, 24, 39)", "rgb(75, 85, 99)"],
  },
  {
    colorStops: ["#868f96 0%", "#596164 100%"],
  },
  {
    colorStops: ["#d7d2cc 0%", "#304352 100%"],
  },
  {
    colorStops: ["#8baaaa 0%", "#ae8b9c 100%"],
  },
  {
    colorStops: ["rgb(229, 231, 235)", "rgb(156, 163, 175)", "rgb(75, 85, 99)"],
  },
  {
    colorStops: ["#f5f7fa 0%", "#c3cfe2 100%"],
  },
  {
    colorStops: [
      "#d5d4d0 0%",
      "#d5d4d0 1%",
      "#eeeeec 31%",
      "#efeeec 75%",
      "#e9e9e7 100%",
    ],
  },
];

const DEFAULT_LINEAR_GRADIENT_DIRECTION: GradientDirection = "to top right";

const gridOverlayColors = ["#030712", "#6b7280", "#f9fafb"];
const gridOverlayDefault: Omit<GridOverlayParams, "pattern"> = {
  color: gridOverlayColors[0],
  opacity: 0.5,
  blurRadius: 20,
};

export function BackgroundForm() {
  const { template, setTemplate } = useTemplateStore();

  const updateBackground = (updates: BackgroundParams) => {
    const newTemplate = {
      ...template,
      params: {
        ...template.params,
        background: {
          ...template.params.background,
          ...updates,
        },
      },
    };
    setTemplate(newTemplate);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Background</CardTitle>
        <CardDescription>
          Set a custom background for your image.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Tabs defaultValue="linear-gradient" className="w-full">
            <TabsList>
              <TabsTrigger value="linear-gradient">Gradient</TabsTrigger>
              <TabsTrigger value="color">Solid Color</TabsTrigger>
            </TabsList>

            <TabsContent value="linear-gradient" className="space-y-4">
              <Card className="p-2">
                <RadioGroup
                  value={
                    template.params.background?.type === "linear-gradient"
                      ? JSON.stringify(template.params.background.colorStops)
                      : undefined
                  }
                  onValueChange={(v) => {
                    updateBackground({
                      type: "linear-gradient",
                      colorStops: JSON.parse(v),
                      direction:
                        template.params.background?.type === "linear-gradient"
                          ? template.params.background.direction
                          : DEFAULT_LINEAR_GRADIENT_DIRECTION,
                      noise: template.params.background?.noise ?? 0.15,
                      gridOverlay: template.params.background?.gridOverlay,
                    });
                  }}
                >
                  <div className="flex flex-wrap gap-1">
                    {linearGradients.map(({ colorStops }) => (
                      <div
                        key={JSON.stringify(colorStops)}
                        className="size-9 min-h-9 min-w-9"
                      >
                        <RadioGroupItem
                          value={JSON.stringify(colorStops)}
                          id={JSON.stringify(colorStops)}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={JSON.stringify(colorStops)}
                          className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          style={{
                            background: toBackgroundShorthand({
                              type: "linear-gradient",
                              direction:
                                template.params.background?.type ===
                                "linear-gradient"
                                  ? template.params.background.direction
                                  : DEFAULT_LINEAR_GRADIENT_DIRECTION,
                              colorStops,
                            }),
                          }}
                        ></Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </Card>

              <div className="space-y-2">
                <div className="text-sm font-medium">Gradient Direction</div>
                <Card className="p-2">
                  <RadioGroup
                    value={
                      template.params.background?.type === "linear-gradient"
                        ? template.params.background.direction
                        : DEFAULT_LINEAR_GRADIENT_DIRECTION
                    }
                    onValueChange={(v) => {
                      if (
                        template.params.background?.type === "linear-gradient"
                      ) {
                        updateBackground({
                          ...template.params.background,
                          direction: v as GradientDirection,
                        });
                      }
                    }}
                  >
                    <div className="grid grid-cols-8 gap-2">
                      <div>
                        <RadioGroupItem
                          value="to top"
                          id="to-top"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-top"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowUpIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to top right"
                          id="to-top-right"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-top-right"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowTopRightIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to right"
                          id="to-right"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-right"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowRightIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to bottom right"
                          id="to-bottom-right"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-bottom-right"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowBottomRightIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to bottom"
                          id="to-bottom"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-bottom"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowDownIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to bottom left"
                          id="to-bottom-left"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-bottom-left"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowBottomLeftIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to left"
                          id="to-left"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-left"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowLeftIcon className="h-4 w-4" />
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="to top left"
                          id="to-top-left"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="to-top-left"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <ArrowTopLeftIcon className="h-4 w-4" />
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="color">
              <Card className="p-2">
                <RadioGroup
                  value={
                    template.params.background?.type === "color"
                      ? template.params.background.color
                      : undefined
                  }
                  onValueChange={(v) => {
                    updateBackground({
                      type: "color",
                      color: v,
                      noise: template.params.background?.noise ?? 0.15,
                    });
                  }}
                >
                  <div className="flex flex-wrap gap-1">
                    {solidColors.map((color) => (
                      <div key={color} className="h-9 min-h-9 w-9 min-w-9">
                        <RadioGroupItem
                          value={color}
                          id={color}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={color}
                          className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          style={{
                            background: color,
                          }}
                        ></Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid gap-2 pt-2">
            <div className="flex justify-between">
              <div className="text-sm font-medium">Grid Overlay</div>
              <Badge>New</Badge>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="width">Pattern</Label>
                <RadioGroup
                  defaultValue="none"
                  value={
                    template.params.background?.gridOverlay
                      ? template.params.background.gridOverlay.pattern
                      : "none"
                  }
                  onValueChange={(v) => {
                    if (v === "none") {
                      updateBackground({
                        ...template.params.background,
                        gridOverlay: undefined,
                      });
                    } else {
                      updateBackground({
                        ...template.params.background,
                        gridOverlay: {
                          pattern: v as GridOverlayParams["pattern"],
                          color:
                            template.params.background?.gridOverlay?.color ||
                            gridOverlayDefault.color,
                          opacity:
                            template.params.background?.gridOverlay?.opacity ||
                            gridOverlayDefault.opacity,
                          blurRadius:
                            template.params.background?.gridOverlay
                              ?.blurRadius || gridOverlayDefault.blurRadius,
                        },
                      });
                    }
                  }}
                >
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <RadioGroupItem
                        value="none"
                        id="none"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="none"
                        className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <ValueNoneIcon className="h-5 w-5" />
                        <span className="mt-1 text-xs">None</span>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="grid"
                        id="grid"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="grid"
                        className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <GridIcon className="h-5 w-5" />
                        <span className="mt-1 text-xs">Grid</span>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="graph-paper"
                        id="graph-paper"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="graph-paper"
                        className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <BorderAllIcon className="h-5 w-5" />
                        <span className="mt-1 text-xs">Graph</span>
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="dots"
                        id="dots"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="dots"
                        className="flex cursor-pointer flex-col items-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <DotsHorizontalIcon className="h-5 w-5" />
                        <span className="mt-1 text-xs">Dots</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {template.params.background?.gridOverlay && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="text-color">Color</Label>
                    <RadioGroup
                      id="text-color"
                      value={template.params.background.gridOverlay.color}
                      onValueChange={(v) => {
                        updateBackground({
                          ...template.params.background,
                          gridOverlay: {
                            ...template.params.background.gridOverlay,
                            color: v,
                          } as GridOverlayParams,
                        });
                      }}
                    >
                      <div className="flex flex-wrap gap-1">
                        {gridOverlayColors.map((color) => (
                          <div key={color} className="h-9 min-h-9 w-9 min-w-9">
                            <RadioGroupItem
                              value={color}
                              id={color}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={color}
                              className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              style={{
                                background: color,
                              }}
                            ></Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="opacity">Opacity</Label>
                      <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        {template.params.background.gridOverlay.opacity}
                      </span>
                    </div>
                    <Slider
                      id="opacity"
                      max={1}
                      step={0.05}
                      value={[template.params.background.gridOverlay.opacity]}
                      onValueChange={(v) => {
                        updateBackground({
                          ...template.params.background,
                          gridOverlay: {
                            ...template.params.background.gridOverlay,
                            opacity: v[0],
                          } as GridOverlayParams,
                        });
                      }}
                      className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                      aria-label="Opacity"
                    />
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="blur-radius">Blur Radius</Label>
                      <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        {template.params.background.gridOverlay.blurRadius}%
                      </span>
                    </div>
                    <Slider
                      id="blur-radius"
                      max={100}
                      step={5}
                      value={[
                        template.params.background.gridOverlay.blurRadius,
                      ]}
                      onValueChange={(v) => {
                        updateBackground({
                          ...template.params.background,
                          gridOverlay: {
                            ...template.params.background.gridOverlay,
                            blurRadius: v[0],
                          } as GridOverlayParams,
                        });
                      }}
                      className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                      aria-label="Blur"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="grid gap-2">
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="noise">Noise</Label>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                      {template.params.background?.noise ?? 0}
                    </span>
                  </div>
                  <Slider
                    id="noise"
                    max={1}
                    step={0.05}
                    value={[template.params.background?.noise ?? 0]}
                    onValueChange={(v) =>
                      updateBackground({
                        ...template.params.background,
                        noise: v[0],
                      })
                    }
                    className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    aria-label="Noise"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="w-[260px] text-sm"
                side="top"
              >
                Control the level background noise to add texture. A value
                between 0.1 to 0.25 is recommended.
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
