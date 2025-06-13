// Font types - you may need to update these based on your actual font definitions
type FontFamily = string;
type FontWeight = number;

// Text types
export interface Text {
  text: string;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  fontSize: number;
  color: string;
}

// Image types
export interface Image {
  url: string; // URL validation would need to be handled at runtime if needed
}

// Canvas types
const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 630;

export interface CanvasParams {
  width: number;
  height: number;
}

export const canvasDefault: CanvasParams = {
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
};

// Background types
export interface GridOverlayParams {
  pattern: "grid" | "graph-paper" | "dots";
  color: string;
  opacity: number;
  blurRadius: number;
}

export interface ColorBackgroundParams {
  type: "color";
  color: string;
  noise: number;
  gridOverlay?: GridOverlayParams;
}

export type GradientDirection =
  | "to top"
  | "to top right"
  | "to right"
  | "to bottom right"
  | "to bottom"
  | "to bottom left"
  | "to left"
  | "to top left";

export interface LinearGradientBackgroundParams {
  type: "linear-gradient";
  direction: GradientDirection;
  colorStops: string[];
  noise: number;
  gridOverlay?: GridOverlayParams;
}

export type BackgroundParams =
  | ColorBackgroundParams
  | LinearGradientBackgroundParams;

export function toBackgroundShorthand(
  background:
    | Pick<LinearGradientBackgroundParams, "type" | "direction" | "colorStops">
    | Pick<ColorBackgroundParams, "type" | "color">
) {
  if (background.type === "color") {
    return background.color;
  } else if (background.type === "linear-gradient") {
    return `linear-gradient(${
      background.direction
    }, ${background.colorStops.join(", ")})`;
  }
}

export type TemplateParams = {
  canvas?: CanvasParams;
  background?: BackgroundParams;
  title: Text;
  description: Text;
  logo?: Image;
  renderWatermark?: boolean;
};
