import { useState, useEffect } from 'react';
import { Map } from '../components/Map';
import { Spinner } from 'react-bootstrap';
import { getLocation } from '../APIServices';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [haveUserLocation, setHaveUserLocation] = useState(false);
  const [zoom, setZoom] = useState(2);

  const [location, setLocation] = useState({
    lat: '',
    lng: '',
  }); // Latitude & Longitude

  const [servicesData, setServicesData] = useState({});
  const [eventsData, setEventsData] = useState({});
  useEffect(() => {
    getLocation().then((location) => {
      setLocation(location);
      setZoom(13);
      setHaveUserLocation(true);
      // postLocation(location);
      // setServicesData(getAllServices(location));
      setLoading(false);
    });
  }, []);

  // setRecommendationsData(getAllRecommendations(location));
  if (loading) return <Spinner animation="border" role="status" />;

  return (
    <div>
      <h1>HEELLLLLOOOO</h1>
      {/* <Spinner animation="border" role="status" />  */}
    </div>
  );
};
