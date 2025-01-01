declare module "react-image-magnify" {
  import React from "react";

  interface ImageProps {
    alt: string;
    isFluidWidth?: boolean;
    src: string;
    width?: number;
    height?: number;
  }

  interface ReactImageMagnifyProps {
    smallImage: ImageProps;
    largeImage: {
      src: string;
      width: number;
      height: number;
    };
    enlargedImagePosition?: "beside" | "over";
    enlargedImageContainerStyle?: React.CSSProperties;
    isHintEnabled?: boolean;
    hintTextMouse?: string;
    hintTextTouch?: string;
  }

  const ReactImageMagnify: React.FC<ReactImageMagnifyProps>;
  export default ReactImageMagnify;
}
