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
  logo?: Image;
  image: Image;
};

export const ImageRightOGTemplate = (params: TemplateParams) => {
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

      {params.logo?.url && (
        <div
          style={{
            display: "flex",

            paddingTop: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <img
            style={{
              height: "4rem",
              width: "4rem",
            }}
            src={params.logo.url}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "1.5rem",

          paddingLeft: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1.5rem",
            flexShrink: 0,

            width: "50%",
            maxWidth: "50%",

            paddingTop: "4rem",
          }}
        >
          {params.tag.text && (
            <div
              style={{
                display: "flex",
                flexGrow: 0,
              }}
            >
              <span
                style={{
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
              </span>
            </div>
          )}

          {params.title.text && (
            <div
              style={{
                display: "flex",
                flexGrow: 0,

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
              flexGrow: 0,
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
