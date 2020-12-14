import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getHikingTrails, getTrailConditions } from '../../APIServices';
import {
  userLocationIcon,
  hikingLocationIcon,
} from '../../components/LocationMarker';
import { Loader } from '../../components/Loader';

export const Trails = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [haveUserLocation, setHaveUserLocation] = useState(false);
  const [zoom, setZoom] = useState(2);

  const [hikingTrails, setHikingTrails] = useState(null);
  const [trailConditions, setTrailConditions] = useState(null);
  const position = [location.lat, location.lng];

  //fetch all trails
  useEffect(() => {
    setZoom(10);
    setHaveUserLocation(true);
    getHikingTrails(location).then((res) => {
      setHikingTrails(res);
      setLoading(false);
    });
  }, []);

  //fetch a trail conditions
  const handelClick = (id) => {
    getTrailConditions(id).then((res) => {
      setTrailConditions(res);
    });
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
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
          hikingTrails &&
          hikingTrails.trails.map((trail) => (
            <Marker
              key={trail.id}
              position={[trail.latitude, trail.longitude]}
              icon={hikingLocationIcon()}
            >
              <Popup>
                <h4> {trail.name}</h4>
                <p>{trail.summary}</p>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
      <div className="sidebar-container">
        {hikingTrails &&
          hikingTrails.trails.map((trail) => (
            <div key={trail.id}>
              <h4> {trail.name}</h4>
              {trail.summary === '' ? '' : <p>{trail.summary}</p>}
              {trail.imgSmall === '' ? (
                ''
              ) : (
                <div className="service-container">
                  <img src={trail.imgSmall} alt="trail" />
                </div>
              )}
              {() => handelClick(trail.id)}
              {trailConditions !== null && trailConditions.id === trail.id ? (
                <div>
                  <p> Trail Condition : {trailConditions.conditionStatus}</p>
                  <p>Condition Details : {trailConditions.conditionDetails}</p>
                  <p>
                    More information : <a href={trailConditions.url}> here</a>
                    {trailConditions.conditionStatus}
                  </p>
                </div>
              ) : (
                <p>NO Conditions provided </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
