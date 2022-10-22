import ImageHoverInfo from "../children/ImageHoverInfo";

// Shown when the user hovers over the image
export interface IHoverInfo {
  title: string;
  description: string;
}

class SlideInfo {
  title: string;
  description: string;
  showDescription?: boolean;
  descriptionLength?: number;
  image: string;
  imageAlt: string;
  link?: string;
  linkText?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

export default SlideInfo;
