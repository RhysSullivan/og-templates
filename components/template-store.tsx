"use client";

import { BasicOGTemplateParams } from "@/registry/components/open-graph/basic";
import { NoticeOGTemplateParams } from "@/registry/components/open-graph/notice";
import { createContext, useContext, useState } from "react";
type TemplateForm =
  | {
      type: "basic";
      params: BasicOGTemplateParams;
    }
  | {
      type: "notice";
      params: NoticeOGTemplateParams;
    };

export const TemplateStore = createContext<{
  template: TemplateForm;
  setTemplate: (template: TemplateForm) => void;
} | null>(null);

export function TemplateStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [template, setTemplate] = useState<TemplateForm>({
    type: "basic",
    params: {
      description: {
        text: "You can just generate them",
        fontFamily: "inter",
        fontWeight: 700,
        fontSize: 40,
        color: "#030712",
      },
      title: {
        text: "Generate Beautiful Open Graph Images",
        fontFamily: "inter",
        fontWeight: 700,
        fontSize: 60,
        color: "#030712",
      },
      canvas: {
        width: 1200,
        height: 630,
      },

      background: {
        type: "linear-gradient",
        direction: "to top right",
        colorStops: [
          "rgb(236, 72, 153)",
          "rgb(239, 68, 68)",
          "rgb(234, 179, 8)",
        ],
        noise: 0.15,
        gridOverlay: {
          pattern: "grid",
          color: "#f9fafb",
          opacity: 0.4,
          blurRadius: 20,
        },
      },
    },
  });

  return (
    <TemplateStore.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateStore.Provider>
  );
}

export function useTemplateStore() {
  const context = useContext(TemplateStore);
  if (!context) {
    throw new Error(
      "useTemplateStore must be used within a TemplateStoreProvider"
    );
  }
  return context;
}
