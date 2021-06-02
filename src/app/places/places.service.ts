import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Times Square',
      'In the heart of Newtork City',
      'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg?w=636&h=358',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31 '),
      'user1'
    ),
    new Place(
      'p2',
      'Eiffel Tower',
      'A place in Paris',
      'https://i.natgeofe.com/k/6d4021bf-832e-49f6-b898-27b7fcd7cbf7/eiffel-tower-ground-up_16x9.jpg?w=636&h=358',
      130.99,
      new Date('2019-02-01'),
      new Date('2019-12-31 '),
      'user2'
    ),
  ]);

  get places() {
    return this._places.asObservable();
  }
  constructor(private authService: AuthService) {}

  getPlace(id) {
    return this.places.pipe(
      take(1),
      map((places) => {
        return { ...places.find((p) => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg?w=636&h=358',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    this.places.pipe(take(1)).subscribe((places) => {
      this._places.next(places.concat(newPlace));
    });

    console.log('updated places', this._places);
  }
}
