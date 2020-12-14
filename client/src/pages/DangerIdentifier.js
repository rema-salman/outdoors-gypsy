import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { createDangerMsg, getAllDangerMsgs } from '../APIServices';
import { userLocationIcon, wildAnimalIcon } from '../components/LocationMarker';
import { Loader } from '../components/Loader';
import { Button } from 'react-bootstrap';

export const DangerIdentifier = ({ location }) => {
  const [requestNum, setRequestNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [haveUserLocation, setHaveUserLocation] = useState(false);
  const [zoom, setZoom] = useState(2);
  const [dangerPoints, setDangerPoints] = useState([]);

  //fetch all danger points saved in DB
  useEffect(() => {
    setZoom(10);
    setHaveUserLocation(true);
    getAllDangerMsgs().then((msgs) => {
      setDangerPoints(msgs);
      setLoading(false);
    });
  }, [requestNum]);

  // adds a new Danger Point to DB
  // then updates state to fetch all points again
  const createNewDanger = () => {
    const title = 'Alert';
    const message = 'Wild Animal Was Spotted Here!';
    createDangerMsg(
      title,
      message,
      location.lat,
      location.lng,
      Date.now(),
    ).then((res) => {
      setRequestNum(requestNum + 1); //rerender component
    });
  };

  return (
    <div>
      <div className="map">
        {loading ? (
          <Loader />
        ) : (
          <MapContainer center={[location.lat, location.lng]} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {haveUserLocation ? (
              <Marker
                position={[location.lat, location.lng]}
                icon={userLocationIcon()}
              />
            ) : (
              ''
            )}
            {dangerPoints &&
              dangerPoints.map((dangerPoint, index) => (
                <Marker
                  key={index}
                  position={[dangerPoint.Latitude, dangerPoint.Longitude]}
                  icon={wildAnimalIcon()}
                >
                  (
                  <Popup>
                    <h4> {dangerPoint.Title}</h4>
                    <p>{dangerPoint.Message}</p>
                  </Popup>
                  ),
                </Marker>
              ))}
          </MapContainer>
        )}
      </div>
      <Button
        className="danger-bnt"
        variant="warning"
        size="lg"
        onClick={() => {
          createNewDanger();
        }}
      >
        add Danger Point at my location
      </Button>
    </div>
  );
};
