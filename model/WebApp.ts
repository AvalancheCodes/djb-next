class WebApp {
  name: string;
  version: string;
  domain: string;
  description: string;
  image: string;
  category: string;
  createdDate: Date;
  initiated: boolean;
  author: string;

  constructor(domain: string) {
    this.domain = "domain";
    this._readConfig();
    //lastly
    this.initiated = true;
  }

  _readConfig() {
    fetch("config/appConfig.json", { mode: "no-cors" }).then((response) => {
      return response.json();
    });
  }
}

export default WebApp;
