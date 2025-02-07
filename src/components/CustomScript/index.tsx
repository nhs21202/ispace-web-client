import ReactHtmlParser from "react-html-parser";
import { CustomCodeType } from "@/utilities/types/settings.type";
import Script from "next/script";
import React from "react";
import { SCRIPT_REGEX } from "@/utilities/constant/regex";

type Props = {
  scrips?: CustomCodeType[];
};

const CustomScript = ({ scrips }: Props) => {
  const extractScriptText = (text: string) => {
    const scripts = [];
    let match;
    while ((match = SCRIPT_REGEX.exec(text)) !== null) {
      scripts.push(`<script${match[1]}</script>`);
    }
    return scripts;
  };

  const renderScriptTag = (text: string, index: number) => {
    if (text.startsWith("<script ")) {
      const regexSrc = /.*src="(.*)"/g;
      const srcText = regexSrc.exec(text)?.[1];
      if (!srcText) return;

      return <Script id={index.toFixed()} key={index} src={srcText} />;
    }

    if (text.startsWith("<script>"))
      return (
        <Script
          id={index.toFixed()}
          key={index}
          dangerouslySetInnerHTML={{
            __html: text
              ?.replaceAll("<script>", "")
              ?.replaceAll("</script>", ""),
          }}
        />
      );
  };

  const renderScripts = (script: CustomCodeType) => {
    const trimmedCode = script.code?.trim() || "";

    const scripts = extractScriptText(trimmedCode);

    const elementScript = scripts.map(renderScriptTag);

    const dom = ReactHtmlParser(trimmedCode);
    return [...dom, ...elementScript];
  };

  return <>{scrips?.map(renderScripts)}</>;
};

export default CustomScript;
