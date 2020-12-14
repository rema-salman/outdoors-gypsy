const STORAGE_LOCATION = '';

export const setStoredLocation = (location) => {
  const locationStr = JSON.stringify(location);
  localStorage.setItem(STORAGE_LOCATION, locationStr);
};

export const getStoredLocation = () => {
  const storedLocation = localStorage.getItem(STORAGE_LOCATION);
  const locationPrs = JSON.parse(storedLocation);
  return locationPrs;
};

export const removeStoredLocation = () => {
  localStorage.removeItem(STORAGE_LOCATION);
  window.localStorage.clear();
};
