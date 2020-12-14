import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getNaturePreserve } from '../../APIServices';
import { userLocationIcon, treesIcon } from '../../components/LocationMarker';

import { ServicesSidebar } from '../../components/ServicesSidebar';
import { Loader } from '../../components/Loader';

export const Preserves = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [haveUserLocation, setHaveUserLocation] = useState(false);
  const [zoom, setZoom] = useState(2);
  const [preserves, setPreserves] = useState({});
  const position = [location.lat, location.lng];

  //fetch all nature perserves
  useEffect(() => {
    setZoom(8);
    setHaveUserLocation(true);
    getNaturePreserve(location).then((res) => {
      setPreserves(res.response);
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
          preserves &&
          preserves.groups[0].items.map((preserve) => (
            <Marker
              key={preserve.venue.id}
              position={[
                preserve.venue.location.lat,
                preserve.venue.location.lng,
              ]}
              icon={treesIcon()}
            >
              <Popup>
                <h4> {preserve.venue.name}</h4>
                <p> {preserve.venue.categories[0].name}</p>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
      <ServicesSidebar services={preserves} />
    </div>
  );
};
