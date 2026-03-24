import { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const defaultContainerStyle = {
  width: "100%",
  height: "400px",
};
const defaultCenter = {
  lat: 4.711,
  lng: -74.0721,
};

export const Map = ({
  locations = [],
  center = defaultCenter,
  containerStyle = defaultContainerStyle,
  zoom = 12,
  renderInfo,
}) => {
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      region
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => setSelected(location)}
        />
      ))}

      {selected && (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          {renderInfo ? (
            renderInfo(selected)
          ) : (
            <div>
              <h3>{selected.name}</h3>
              <p>{selected.address}</p>
            </div>
          )}
        </InfoWindow>
      )}
    </GoogleMap>
  );
};
