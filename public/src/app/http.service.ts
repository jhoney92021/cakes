import { Injectable } from '@angular/core';
//IMPORT FOR HTTP CLIENT
import { HttpClient } from '@angular/common/http';
//IMPORT FOR HTTP CLIENT

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getCakes(){
  return this._http.get('/cake');/*get all*/
  }
  makeCake(newCake){
    return this._http.post('/cake', newCake);/*make cake*/
  }
  reviewCake(_id, newReview){
    return this._http.post(`/cake/${_id}`, newReview);/*make cake*/
  }
  deleteCake(_id){
    return this._http.delete(`/cake/${_id}`);/*delete cake*/
  }
  editCake(_id, changes){
    return this._http.put(`/cake/${_id}`, changes);/*edit cake*/
  }
  getOneCake(_id){
    return this._http.get(`/cake/${_id}`);/*get a cake*/
  }
  cakesByBaker(baker){
    return this._http.get(`/cake/baker${baker}`);/*by baker cake*/
  }
}
