import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getCampgrounds } from '../../APIServices';
import { userLocationIcon, tentIcon } from '../../components/LocationMarker';
import { ServicesSidebar } from '../../components/ServicesSidebar';
import { Loader } from '../../components/Loader';

export const Campgrounds = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [haveUserLocation, setHaveUserLocation] = useState(false);
  const [zoom, setZoom] = useState(2);
  const [campgrounds, setCampgrounds] = useState({});
  const position = [location.lat, location.lng];

  //fetch all campspots
  useEffect(() => {
    setZoom(8);
    setHaveUserLocation(true);
    getCampgrounds(location).then((res) => {
      setCampgrounds(res.response);
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
          campgrounds &&
          campgrounds.groups[0].items.map((campground) => (
            <Marker
              key={campground.venue.id}
              position={[
                campground.venue.location.lat,
                campground.venue.location.lng,
              ]}
              icon={tentIcon()}
            >
              <Popup>
                <h4> {campground.venue.name}</h4>
                <p> {campground.venue.categories[0].name}</p>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
      <ServicesSidebar services={campgrounds} />
    </div>
  );
};
