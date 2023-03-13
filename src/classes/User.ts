import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div style="
    display: flex;
    flex-direction: column;
    align-items: center;">
    <h2 style="margin: 0;">User</h2> 
    <h3 style="margin: 0;">${this.name}</h3>
    </div`;
  }
}
