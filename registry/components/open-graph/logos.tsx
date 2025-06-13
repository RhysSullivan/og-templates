import { patterns } from "@/registry/lib/patterns";
import { absoluteUrl } from "@/registry/lib/url";
import {
  BackgroundParams,
  Image,
  CanvasParams,
  Text,
  toBackgroundShorthand,
  backgroundDefault,
  canvasDefault,
} from "@/registry/lib/parameters";

type TemplateParams = {
  canvas?: CanvasParams;
  background?: BackgroundParams;
  tag: Text;
  title: Text;
  logos: Image[];
};

export const LogosOGTemplate = (params: TemplateParams) => {
  const canvas = params.canvas ?? canvasDefault;
  const background = params.background ?? backgroundDefault;

  return (
    <div
      style={{
        width: canvas.width,
        height: canvas.height,

        background: toBackgroundShorthand(background),

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        gap: "2rem",
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
          flexDirection: "column",
          alignItems: "center",

          rowGap: "0.5rem",
        }}
      >
        {params.tag.text && (
          <div
            style={{
              flexShrink: 0,

              fontFamily: params.tag.fontFamily,
              fontWeight: params.tag.fontWeight,
              fontSize: `${params.tag.fontSize}px`,
              color: params.tag.color,

              border: "solid",
              borderRadius: "100",
              borderWidth: "2px",

              paddingRight: "16px",
              paddingLeft: "16px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            {params.tag.text}
          </div>
        )}

        {params.title.text && (
          <div
            style={{
              flexShrink: 0,

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
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        {params.logos.map(
          (logo, i) =>
            logo.url && (
              <img
                key={i}
                style={{
                  height: "6rem",
                  width: "6rem",
                }}
                src={logo.url}
              />
            )
        )}
      </div>
    </div>
  );
};
