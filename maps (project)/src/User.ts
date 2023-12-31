import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerString(): string {
    return `User: ${this.name}`;
  }

  constructor() {
    this.name = faker.internet.userName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
