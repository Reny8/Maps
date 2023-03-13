import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
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
    <h2 style="margin: 0;">Company</h2> 
    <h3 style="margin: 0;"> ${this.name}</h3>
    <p style="margin: 0;">${this.catchPhrase}</p>
    </div>
    `;
  }
}
