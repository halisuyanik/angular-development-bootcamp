import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import {ListResponseModel} from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [];
  apiUrl='https://localhost:44368/api/products/getall';

  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
    
  }
}
