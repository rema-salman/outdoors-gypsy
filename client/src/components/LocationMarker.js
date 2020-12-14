import L from 'leaflet';
import userMarker from '../asset/locationMarker.png';
import hiking from '../asset/hiking.png';
import wildAnimal from '../asset/wildAnimal.png';
import tent from '../asset/tent.png';
import trees from '../asset/trees.png';
import store from '../asset/store.png';

// Customized icons for the maps
export const userLocationIcon = () => {
  return L.icon({
    iconUrl: userMarker,
    iconSize: [32, 32],
  });
};

export const hikingLocationIcon = () => {
  return L.icon({
    iconUrl: hiking,
    iconSize: [32, 32],
  });
};

export const wildAnimalIcon = () => {
  return L.icon({
    iconUrl: wildAnimal,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });
};

export const treesIcon = () => {
  return L.icon({
    iconUrl: trees,
    iconSize: [32, 32],
  });
};

export const tentIcon = () => {
  return L.icon({
    iconUrl: tent,
    iconSize: [32, 32],
  });
};

export const storeIcon = () => {
  return L.icon({
    iconUrl: store,
    iconSize: [32, 32],
  });
};
