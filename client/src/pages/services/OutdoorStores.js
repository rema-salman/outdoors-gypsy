import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getOutdoorStores } from '../../APIServices';
import { Loader } from '../../components/Loader';
import { userLocationIcon, storeIcon } from '../../components/LocationMarker';
import { ServicesSidebar } from '../../components/ServicesSidebar';

export const OutdoorStores = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [haveUserLocation, setHaveUserLocation] = useState(false);
  const [zoom, setZoom] = useState(2);
  const [stores, setStores] = useState({});
  const position = [location.lat, location.lng];
  //fetch all outdoor stores
  useEffect(() => {
    setZoom(8);
    setHaveUserLocation(true);
    getOutdoorStores(location).then((res) => {
      setStores(res.response);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {haveUserLocation ? (
          <Marker position={position} icon={userLocationIcon()} />
        ) : (
          ''
        )}

        {loading ? (
          <Loader />
        ) : (
          stores &&
          stores.groups[0].items.map((store) => (
            <Marker
              key={store.venue.id}
              position={[store.venue.location.lat, store.venue.location.lng]}
              icon={storeIcon()}
            >
              <Popup>
                <h4> {store.venue.name}</h4>
                <p> {store.venue.categories[0].name}</p>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
      <ServicesSidebar services={stores} />
    </div>
  );
};
