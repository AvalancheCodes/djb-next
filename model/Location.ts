interface IAddress {
  street: string;
  suite?: string;
  city: string;
  state: string;
  zip: string;
}
interface IGeoLocation {
  lat: string;
  lng: string;
}

class Location {
  name: string;
  address: IAddress;
  geoLocation: IGeoLocation;

  constructor(public latitude: number, public longitude: number) {}
}

export default Location;
