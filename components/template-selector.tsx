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
            {templates.map((t) => (
              <CarouselItem
                key={t.tag}
                className="basis-40 md:basis-64 lg:basis-1/5"
                onClick={() => {
                  console.log("clicked", t.tag);
                  props.setSelectedTemplate(t.tag);
                }}
              >
                <RadioGroupItem
                  value={t.tag}
                  id={t.tag}
                  onClick={() => {
                    console.log("clicked", t.tag);
                    props.setSelectedTemplate(t.tag);
                  }}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={t.tag}
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
