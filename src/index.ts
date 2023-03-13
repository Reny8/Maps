/// <reference types="@types/google.maps" />
import { Company } from './classes/Company';
import { CustomMap } from './classes/CustomMap';
import { User } from './classes/User';

const user = new User();
const company = new Company();
const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
