import { useCallback, useState, memo, FC } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface IProps {
  geo: any;
  size: any;
}

const GMapLocation: FC<IProps> = ({ geo, size }) => {
  const [map, setMap] = useState<google.maps.Map | undefined>();
  const containerStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API!,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(geo);
      map.fitBounds(bounds);
      setMap(map);
      setTimeout(() => {
        map.setZoom(15);
      }, 1000);
    },
    [geo]
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(undefined);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-100 h-100 grayscal"
      mapContainerStyle={containerStyle}
      center={geo}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={geo} title={"David J. Barel"} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(GMapLocation);
