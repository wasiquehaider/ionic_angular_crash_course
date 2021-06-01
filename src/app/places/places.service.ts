import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Times Square',
      'In the heart of Newtork City',
      'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg?w=636&h=358',
      149.99
    ),
    new Place(
      'p2',
      'Eiffel Tower',
      'A place in Paris',
      'https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_16x9.jpg?w=636&h=358',
      130.99
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() {}

  getPlace(id) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
