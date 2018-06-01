import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ride } from '../../model/ride/ride';

@Injectable()
export class RideService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/rides';
  }

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.baseUrl);
  }

  getRideById(id: number): Observable<Ride> {
    return this.http.get<Ride>(`${this.baseUrl}/${id}`);
  }

  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(this.baseUrl, ride);
  }

  updateRide(ride: Ride): Observable<Ride> {
    return this.http.put<Ride>(`${this.baseUrl}/${ride.id}`, ride);
  }

  deleteRide(id: number): Observable<Ride> {
    return this.http.delete<Ride>(`${this.baseUrl}/${id}`);
  }

}
