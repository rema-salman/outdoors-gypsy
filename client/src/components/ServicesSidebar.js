import { useState } from 'react';
import { getSingleRecDetails } from '../APIServices';

export const ServicesSidebar = ({ services }) => {
  const [serviceInfo, setServiceInfo] = useState(null);

  // fetching details about a single service
  const handelClick = (id) => {
    getSingleRecDetails(id).then((res) => {
      setServiceInfo(res.response);
    });
  };

  return (
    <div className="sidebar-container">
      {services &&
        services.groups[0].items.map((service) => (
          <div
            key={service.venue.id}
            onClick={() => {
              handelClick(service.venue.id);
            }}
          >
            <h4> {service.venue.name}</h4>
            <p>{service.venue.categories[0].name}</p>

            {serviceInfo && serviceInfo.id === service.venue.id ? (
              <div className="service-container">
                <p>{serviceInfo.location.city}</p>
                <h4 className="rating">
                  {serviceInfo.bestPhoto.source.rating}
                </h4>

                <img
                  src={
                    serviceInfo.bestPhoto.prefix +
                    serviceInfo.bestPhoto.width +
                    'x' +
                    serviceInfo.bestPhoto.height +
                    serviceInfo.bestPhoto.suffix
                  }
                />
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
    </div>
  );
};
