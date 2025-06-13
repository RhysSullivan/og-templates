import Image from "next/image";
import satori from "satori";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";

export default function PreviewRenderer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    async function renderSvg() {
      return await satori(children, {
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
  }, [children]);

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
