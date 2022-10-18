import ILocation, { IGeoLocation } from "./ILocation";

interface IAppConfig {
  name: string;
  version: string;
  domain: string;
  description: string;
  author: string;
  categories: string[];
  locations: ILocation[];
}

export default IAppConfig;
