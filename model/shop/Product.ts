class Product {
  id: number;
  title: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  link: string;
  linkText: string;
  price: number;

  constructor(
    id: number,
    title: string,
    description: string,
    mainImage: string,
    mainImageAlt: string,
    secondaryImage: string,
    secondaryImageAlt: string,
    link: string,
    linkText: string,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.mainImage = mainImage;
    this.mainImageAlt = mainImageAlt;
    this.secondaryImage = secondaryImage;
    this.secondaryImageAlt = secondaryImageAlt;
    this.link = link;
    this.linkText = linkText;
    this.price = price;
  }
}

export default Product;
