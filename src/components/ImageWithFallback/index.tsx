"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallbackSrc?: string;
};

const ImageWithFallback = (props: Props) => {
  const {
    src,
    fallbackSrc = "/images/image_placeholder.jpg",
    alt = "image",
    ...rest
  } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
