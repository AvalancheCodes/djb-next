import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const GMapLocation = ({ geo, zoom, size }) => {
  const [map, setMap] = React.useState(null);
  const containerStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  });

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(geo);
      map.fitBounds(bounds);
      setMap(map);
    },
    [zoom]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      map.setZoom(zoom);
    }
  }, [zoom]);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-100 h-100 grayscal"
      mapContainerStyle={containerStyle}
      center={geo}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={geo} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(GMapLocation);
