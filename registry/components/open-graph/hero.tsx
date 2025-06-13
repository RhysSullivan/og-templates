import { patterns } from "@/registry/lib/patterns";
import {
  backgroundDefault,
  BackgroundParams,
  canvasDefault,
  CanvasParams,
  Text,
  Image,
  toBackgroundShorthand,
} from "@/registry/lib/parameters";
import { absoluteUrl } from "@/registry/lib/url";

type TemplateParams = {
  canvas?: CanvasParams;
  background?: BackgroundParams;
  tag: Text;
  title: Text;
  image: Image;
};

export const HeroOGComponent = (params: TemplateParams) => {
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
        alignItems: "center",
        overflowY: "clip",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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

            marginTop: "4rem",

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

        {params.image.url && (
          <div
            style={{
              display: "flex",

              width: "100%",

              paddingTop: "4rem",
              paddingRight: "4rem",
              paddingLeft: "4rem",
            }}
          >
            <img
              style={{
                borderRadius: "0.75rem",
              }}
              src={params.image.url}
            />
          </div>
        )}
      </div>
    </div>
  );
};
