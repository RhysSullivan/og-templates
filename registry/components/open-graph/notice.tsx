import { patterns } from "@/registry/lib/patterns";
import { absoluteUrl } from "@/registry/lib/url";
import {
  BackgroundParams,
  Image,
  CanvasParams,
  Text,
  toBackgroundShorthand,
  canvasDefault,
  backgroundDefault,
} from "@/registry/lib/parameters";

type TemplateParams = {
  canvas?: CanvasParams;
  background?: BackgroundParams;
  description: Text;
  title: Text;
  logo?: Image;
};

export const NoticeOGTemplate = (params: TemplateParams) => {
  const canvas = params.canvas ?? canvasDefault;
  const background = params.background ?? backgroundDefault;

  return (
    <div
      style={{
        background: toBackgroundShorthand(background),

        width: canvas.width,
        height: canvas.height,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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
          backgroundImage: `url('${absoluteUrl("/noise.svg")}')`,
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
          columnGap: "1.5rem",
          alignItems: "center",
        }}
      >
        {params.logo?.url && (
          <img
            style={{
              width: "6rem",
              height: "6rem",
            }}
            src={params.logo.url}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {params.title.text && (
            <div
              style={{
                fontFamily: params.title.fontFamily,
                fontWeight: params.title.fontWeight,
                fontSize: `${params.title.fontSize}px`,
                color: params.title.color,
                letterSpacing: "-0.025em",
              }}
            >
              {params.title.text}
            </div>
          )}

          {params.description.text && (
            <div
              style={{
                fontFamily: params.description.fontFamily,
                fontWeight: params.description.fontWeight,
                fontSize: `${params.description.fontSize}px`,
                color: params.description.color,
              }}
            >
              {params.description.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
