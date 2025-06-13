import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./load-google-font";

export async function renderOgToImage(
  Component: React.ReactElement,
  metadata: {
    width: number;
    height: number;
    allText: string;
  }
) {
  return new ImageResponse(Component, {
    width: metadata.width,
    height: metadata.height,
    fonts: [
      {
        name: "Geist",
        data: await loadGoogleFont("Geist", metadata.allText),
        style: "normal",
      },
    ],
  });
}
