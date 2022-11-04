class MenuRoute {
  public name: string;
  public friendlyName: string;
  public title: string;
  public path: string;

  constructor(name: string, friendlyName: string, title: string, path: string) {
    this.name = name;
    this.friendlyName = friendlyName;
    this.title = title;
    this.path = path;
  }
}

export default MenuRoute;
