"use client";

import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

export { Media, MediaContextProvider, mediaStyles };
