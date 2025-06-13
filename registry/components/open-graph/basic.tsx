import { patterns } from "@/registry/lib/patterns";
import { NOISE_IMAGE } from "@/registry/lib/noise";
import {
  canvasDefault,
  backgroundDefault,
  BackgroundParams,
  CanvasParams,
  Text,
  Image,
  toBackgroundShorthand,
} from "@/registry/lib/parameters";

export type BasicOGTemplateParams = {
  canvas?: CanvasParams;
  background?: BackgroundParams;
  title: Text;
  description: Text;
  logo?: Image;
};

export const BasicOGComponent = (params: BasicOGTemplateParams) => {
  const canvas = params.canvas ?? canvasDefault;
  const background = params.background ?? backgroundDefault;
  const title = params.title;
  const description = params.description;
  const logo = params.logo;

  return (
    <div
      style={{
        width: canvas.width,
        height: canvas.height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: toBackgroundShorthand(background),
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          inset: 0,
          filter: "brightness(100%) contrast(150%)",
          opacity: background.noise,
          backgroundImage: NOISE_IMAGE,
          backgroundRepeat: "repeat",
        }}
      ></div>

      {background.gridOverlay && (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundImage: `url('${patterns[
              background.gridOverlay.pattern
            ].svg({
              color: background.gridOverlay.color,
              opacity: background.gridOverlay.opacity,
            })}')`,
            maskImage:
              background.gridOverlay.blurRadius > 0
                ? `radial-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) ${
                    100 - background.gridOverlay.blurRadius
                  }%)`
                : "none",
          }}
        ></div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {logo?.url && (
          <img
            style={{
              width: "6rem",
              height: "6rem",
            }}
            src={logo?.url}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {title.text && (
            <div
              style={{
                fontFamily: title.fontFamily,
                fontWeight: title.fontWeight,
                fontSize: `${title.fontSize}px`,
                color: title.color,
                letterSpacing: "-0.025em",
              }}
            >
              {title.text}
            </div>
          )}

          {description.text && (
            <div
              style={{
                fontFamily: description.fontFamily,
                fontWeight: description.fontWeight,
                fontSize: `${description.fontSize}px`,
                color: description.color,
              }}
            >
              {description.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
