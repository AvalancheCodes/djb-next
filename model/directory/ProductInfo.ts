class ProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  imageAlt: string;
  link?: string;
  linkText?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  category?: string;
  rating?: number;
  majorTechnology?: string;

  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    imageAlt: string,
    link: string,
    linkText: string,
    secondaryImage: string,
    secondaryImageAlt: string,
    category: string,
    rating: number,
    majorTechnology: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.imageAlt = imageAlt;
    this.link = link;
    this.linkText = linkText;
    this.secondaryImage = secondaryImage;
    this.secondaryImageAlt = secondaryImageAlt;
    this.category = category;
    this.rating = rating;
    this.majorTechnology = majorTechnology;
  }
}

export default ProductInfo;
