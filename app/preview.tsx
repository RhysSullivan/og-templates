import Image from "next/image";
import satori from "satori";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";
import { useTemplateStore } from "@/components/template-store";
import { BasicOGComponent } from "@/registry/components/open-graph/basic";
import { NoticeOGTemplate } from "@/registry/components/open-graph/notice";

const templates = {
  basic: BasicOGComponent,
  notice: NoticeOGTemplate,
};

export default function PreviewRenderer() {
  const { template } = useTemplateStore();
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    const Template = templates[template.type];
    async function renderSvg() {
      return await satori(Template(template.params), {
        // debug: process.env.NODE_ENV === "development",
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: await fetch(
              `https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff`
            ).then((res) => res.arrayBuffer()),
            weight: 400,
            style: "normal",
          },
        ],
      });
    }
    renderSvg().then((svg) => setSvg(svg));
  }, [template]);

  if (!svg) return null;
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        alt="Preview"
        priority
        width={1200}
        className="h-full w-full object-contain"
        height={630}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
        style={{ pointerEvents: "none" }}
      />
    </AspectRatio>
  );
}
