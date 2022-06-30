import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Ingredient } from '../../../shared/ingredient.model';
import { catchError } from 'rxjs/operators';

const baseUrl = 'https://react-my-burger-3dbec.firebaseio.com/orders.json';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const main = localStorage.getItem('token');
    const Token = main.replace(/['"]+/g, '');

    const main1 = localStorage.getItem('userId');
    const userId = main1.replace(/['"]+/g, '');

    const queryParams = '?auth=' + Token + '&orderBy="userId"&equalTo="' + userId + '"';
    return this.http.get(baseUrl + queryParams);
  }

  saveOrder(price, ingredients, userId) {
    const main = localStorage.getItem('token');
    const Token = main.replace(/['"]+/g, '');

    return this.http.post(baseUrl + '?auth=' + Token, {
        price, ingredients, userId
      }
    )
    .pipe(
      catchError(errorRes => {
        const errorMessage = 'An error occurred!';
        return throwError(errorMessage);
      })
    );
  }
}
