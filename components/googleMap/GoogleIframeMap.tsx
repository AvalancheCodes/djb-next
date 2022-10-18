import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const GMapLocation = ({ geo, size }) => {
  const [map, setMap] = React.useState(null);
  const [zoom, setZoom] = React.useState(15);
  const containerStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(geo);
    map.fitBounds(bounds);
    setMap(map);
    setTimeout(() => {
      map.setZoom(15);
    }, 1000);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
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

export default React.memo(GMapLocation);
