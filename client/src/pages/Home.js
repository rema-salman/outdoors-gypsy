import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { getGears } from '../APIServices';
import { Loader } from '../components/Loader';

export const Home = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [gears, setGears] = useState([]);
  const [essentials, setEssentials] = useState([]);

  //fetch the list gears and updating the state
  useEffect(() => {
    getGears(location).then((res) => {
      setEssentials(res[0].essentials);
      setGears(res);
      setLoading(false);
    });
  }, []);

  //Converts the UNIX-timestap to readable date
  const convertUNIX_timestamp = (UNIX_timestamp) => {
    let date = JSON.stringify(new Date(UNIX_timestamp * 1000));
    return date.slice(1, 11);
  };
  //Calculates the avrage temperature of the day
  const getAverageTemp = (min, max) => {
    let avrg = (min + max) / 2;
    return Math.round(avrg * 10) / 10;
  };

  // render the gears according to the daily weather
  const renderGears = (item) => {
    const arr = [];
    if (item.rain) {
      arr.push(
        <div className="daily-gear">
          <Row>
            <Col>
              <h3>You will need these items for the rain </h3>
            </Col>
          </Row>
          <Row>
            {item.rain &&
              item.rain.map((rainGear) => (
                <Col key={rainGear.name} sm={6} md={4}>
                  <img
                    className="gear-img"
                    src={rainGear.img}
                    alt={rainGear.name}
                  />
                  <p>{rainGear.name}</p>
                </Col>
              ))}
          </Row>
        </div>,
      );
    }
    if (item.cold) {
      arr.push(
        <div className="daily-gear">
          <Row>
            <Col>
              <h3>You will need these items for the cold </h3>
            </Col>
          </Row>
          <Row>
            {item.cold &&
              item.cold.map((coldGear) => (
                <Col key={coldGear.name} sm={6} md={4}>
                  <img
                    className="gear-img"
                    src={coldGear.img}
                    alt={coldGear.name}
                  />
                  <p>{coldGear.name}</p>
                </Col>
              ))}
          </Row>
        </div>,
      );
    }
    if (item.warm) {
      arr.push(
        <div className="daily-gear">
          <Row>
            <Col>
              <h3>You will need these items for the warm</h3>
            </Col>
          </Row>
          <Row>
            {item.warm &&
              item.warm.map((warmGear) => (
                <Col key={warmGear.name} sm={6} md={4}>
                  <img
                    className="gear-img"
                    src={warmGear.img}
                    alt={warmGear.name}
                  />
                  <p>{warmGear.name}</p>
                </Col>
              ))}
          </Row>
        </div>,
      );
    }
    if (item.sunny) {
      arr.push(
        <div className="daily-gear">
          <Row>
            <Col>
              <h3>You will need these items for the sun</h3>
            </Col>
          </Row>
          <Row>
            {item.sunny &&
              item.sunny.map((sunGear) => (
                <Col key={sunGear.name} sm={6} md={4}>
                  <img
                    className="gear-img"
                    src={sunGear.img}
                    alt={sunGear.name}
                  />
                  <p>{sunGear.name}</p>
                </Col>
              ))}
          </Row>
        </div>,
      );
    }
    return arr;
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="grid-container">
      <Row>
        <Col>
          <h3> Don't Forget Your Esentails </h3>
        </Col>
      </Row>
      <Row>
        {essentials &&
          essentials.map((esentail) => (
            <Col key={esentail.name} sm={6} md={4}>
              <img
                className="gear-img"
                src={esentail.img}
                alt={esentail.name}
              />
              <p>{esentail.name}</p>
            </Col>
          ))}
      </Row>
      {/* Looping through the daily weather conditions 
then showing the gears accordingly */}
      {gears &&
        gears.map((item) => (
          <div key={item.weather.dt}>
            <Row className="daily-gear-header">
              <Col sm={6} md={4}>
                <h3>{convertUNIX_timestamp(item.weather.dt)}</h3>
              </Col>
              <Col sm={6} md={4}>
                <h3>
                  Avg.
                  {getAverageTemp(item.weather.temp.min, item.weather.temp.max)}
                </h3>
              </Col>
              <Col sm={6} md={4}>
                <h3>{item.weather.weather[0].main} </h3>
              </Col>
            </Row>
            {renderGears(item)}
          </div>
        ))}
    </div>
  );
};
