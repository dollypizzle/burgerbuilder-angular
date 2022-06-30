import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = 'https://react-my-burger-3dbec.firebaseio.com/orders.json';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const userToken = localStorage.getItem('token');
    const Token = userToken.replace(/['"]+/g, '');

    const user = localStorage.getItem('userId');
    const userId = user.replace(/['"]+/g, '');

    const queryParams = '?auth=' + Token + '&orderBy="userId"&equalTo="' + userId + '"';
    return this.http.get(baseUrl + queryParams);
  }

  saveOrder(price, ingredients, userId) {
    const userToken = localStorage.getItem('token');
    const Token = userToken.replace(/['"]+/g, '');

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
