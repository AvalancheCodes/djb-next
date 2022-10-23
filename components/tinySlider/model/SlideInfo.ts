// Shown when the user hovers over the image
export interface IHoverInfo {
  title: string;
  description: string;
}

class SlideInfo {
  id: number;
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

  constructor(
    id: number,
    title: string,
    description: string,
    showDescription: boolean,
    descriptionLength: number,
    image: string,
    imageAlt: string,
    link: string,
    linkText: string,
    secondaryImage: string,
    secondaryImageAlt: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.showDescription = showDescription;
    this.descriptionLength = descriptionLength;
    this.image = image;
    this.imageAlt = imageAlt;
    this.link = link;
    this.linkText = linkText;
    this.secondaryImage = secondaryImage;
    this.secondaryImageAlt = secondaryImageAlt;
  }
}

export default SlideInfo;
