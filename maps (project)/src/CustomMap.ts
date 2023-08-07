export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerString(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map | undefined;

  constructor(divId: string) {
    this.initMap(divId);
  }

  private initMap(divId: string): void {
    const map = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: -25.363, lng: 131.044 },
      }
    );
    this.googleMap = map;
  }

  public addUserMarker(mapper: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapper.location.lat,
        lng: mapper.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mapper.markerString(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
