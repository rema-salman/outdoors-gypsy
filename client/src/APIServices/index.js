import axios from 'axios';

const getInstance = () => {
  const instance = axios.create({
    baseURL: '',
  });
  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log(error);
      return Promise.reject(error);
    },
  );

  return instance;
};

/**
 * Gets user's location (based on IP address) either from browser
 * or external open-source API to be stored in the lcoal storage.
 */
export const getLocation = () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        resolve(
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((location) => {
              return {
                lat: location.latitude,
                lng: location.longitude,
              };
            }),
        );
      },
    );
  });
};

///Getting a list of gears
export const getGears = (location) => {
  return getInstance().get(
    `/gears?lat=${location.lat}&lng=${location.lng}`, //&cnt=${daysNum}`,
  );
};

//  Request hiking trails near by the location
export const getHikingTrails = (location) => {
  return getInstance().get(
    `/hiking-trails?lat=${location.lat}&lng=${location.lng}`,
  );
};

// Request conditions of a specific trail
// Turns out it has the same info as hikingTrails
export const getTrailInfo = (id) => {
  return getInstance().get(`/get-trail-by-id?id=${id}`);
};

//  Request conditions of a specific trail
export const getTrailConditions = (id) => {
  return getInstance().get(`/get-conditions?id=${id}`);
};

//  Request a list of campspots
export const getCampgrounds = (location) => {
  return getInstance().get(
    `/campgrounds?lat=${location.lat}&lng=${location.lng}`,
  );
};

//  Request a list of neture preserves
export const getNaturePreserve = (location) => {
  return getInstance().get(
    `/nature-preserves?lat=${location.lat}&lng=${location.lng}`,
  );
};

//  Request a list of outdoor stores
export const getOutdoorStores = (location) => {
  return getInstance().get(
    `/outdoor-stores?lat=${location.lat}&lng=${location.lng}`,
  );
};

//  Request Details of a specific place
export const getSingleRecDetails = (id) => {
  return getInstance().get(`/services?id=${id}`);
};

//  Request getting all danger points
export const getAllDangerMsgs = () => {
  return getInstance().get(`/danger-messages`);
};

// Request creating a new danger point
export const createDangerMsg = (title, msg, lat, lng, createdAt) => {
  return getInstance().post(`/danger-messages`, {
    title,
    msg,
    lat,
    lng,
    createdAt,
  });
};
// Request news
export const getNews = () => {
  return getInstance().get(`/news`);
};
