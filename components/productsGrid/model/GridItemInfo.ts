interface IProductImage {
  src: string;
  alt: string;
  isPrimary: boolean;
}

class GridItemInfo {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string,
    public description: string,
    public link: string,
    public linkText: string
  ) {}
}

export default GridItemInfo;
