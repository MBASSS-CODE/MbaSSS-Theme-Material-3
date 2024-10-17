import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyJSONService {
  apiURL = 'https://dummyjson.com/products';
  constructor(
    private httpClient: HttpClient
  ) { }

  all() {
    return this.httpClient.get(`${this.apiURL}?limit=10&skip=10&select=title,price`);
  }

  public filter(HttpParams: HttpParams) {
    return this.httpClient.get(`${this.apiURL}?${HttpParams}`);
  }

  public get(id:string){
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }

  public search(keyword: string) {
    console.log('keyword', keyword);
    return this.httpClient.get(`${this.apiURL}/search?q=${keyword}`);
  }
}
