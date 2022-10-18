import IAppConfig from "./IAppConfig";

class WebApp {
  name: string;
  domain: string;
  createdDate: Date;
  updatedDate: Date;
  initiated: boolean;
  configData: IAppConfig;

  constructor(domain: string) {
    this.domain = domain;
    this._initApp();
  }

  _initApp() {
    fetch("/api/public/config", { mode: "no-cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.configData = data;
        this.initiated = true;
        this.domain = data.domain || this.domain;
        this.createdDate = new Date();
      });
  }
}

export default WebApp;
