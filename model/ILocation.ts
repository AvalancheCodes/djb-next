export interface IAddress {
  street: string;
  suite?: string;
  city: string;
  state: string;
  zip: string;
}
export interface IGeoLocation {
  lat: number;
  lng: number;
}

export interface ILocation {
  name: string;
  address: IAddress;
  geoLocation?: IGeoLocation;
}

export default ILocation;
