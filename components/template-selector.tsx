"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  BasicSkeleton,
  NoticeSkeleton,
  HeroSkeleton,
  ImageRightSkeleton,
  LogosSkeleton,
} from "@/components/skeletons";
import { BasicOGComponent } from "@/registry/components/open-graph/basic";
import { NoticeOGTemplate } from "@/registry/components/open-graph/notice";
import { HeroOGComponent } from "@/registry/components/open-graph/hero";
import { ImageRightOGTemplate } from "@/registry/components/open-graph/image-right";
import { LogosOGTemplate } from "@/registry/components/open-graph/logos";
export const templates = {
  basic: {
    skeleton: <BasicSkeleton />,
    component: BasicOGComponent,
    componentName: "BasicOGComponent",
  },
  notice: {
    skeleton: <NoticeSkeleton />,
    component: NoticeOGTemplate,
    componentName: "NoticeOGComponent",
  },
  hero: {
    skeleton: <HeroSkeleton />,
    component: HeroOGComponent,
    componentName: "HeroOGComponent",
  },
  "image-right": {
    skeleton: <ImageRightSkeleton />,
    component: ImageRightOGTemplate,
    componentName: "ImageRightOGComponent",
  },
  logos: {
    skeleton: <LogosSkeleton />,
    component: LogosOGTemplate,
    componentName: "LogosOGComponent",
  },
} as const;

export default function TemplateSelector(props: {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
}) {
  return (
    <div className="space-y-4">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <RadioGroup
          value={props.selectedTemplate}
          onValueChange={(v) => {
            console.log("selected", v);
            props.setSelectedTemplate(v as string);
          }}
        >
          <CarouselContent>
            {Object.entries(templates).map(([key, t]) => (
              <CarouselItem
                key={key}
                className="basis-40 md:basis-64 lg:basis-1/5"
                onClick={() => {
                  console.log("clicked", key);
                  props.setSelectedTemplate(key);
                }}
              >
                <RadioGroupItem
                  value={key}
                  id={key}
                  onClick={() => {
                    console.log("clicked", key);
                    props.setSelectedTemplate(key);
                  }}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={key}
                  className="flex aspect-video max-h-24 items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary sm:max-h-32 [&:has([data-state=checked])]:border-primary"
                >
                  {t.skeleton}
                </Label>
              </CarouselItem>
            ))}
          </CarouselContent>
        </RadioGroup>

        {/* NOTE: hiding the buttons for large screens for now since we only have 5 templates */}
        <CarouselPrevious className="left-2 lg:hidden" variant="secondary" />
        <CarouselNext className="right-2 lg:hidden" variant="secondary" />
      </Carousel>
    </div>
  );
}
