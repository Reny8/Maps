/// <reference types="@types/google.maps" />
import { Company } from './classes/Company';
import { User } from './classes/User';

const user = new User();
const company = new Company();
const map = document.getElementById('map');
new google.maps.Map(map as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
