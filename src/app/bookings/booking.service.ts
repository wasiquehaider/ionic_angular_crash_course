import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _bookings: Booking[] = [
    new Booking('1', 'p1', 'userAbc', 'Times Square', 2),
    new Booking('4', 'p2', 'userxyz', 'Eiffel Tower', 4),
  ];

  constructor() {}
  get bookings() {
    return [...this._bookings];
  }
}
