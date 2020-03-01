import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUrl = environment.api_url;
  private headers = new HttpHeaders()
  .set('Content-Type' , 'application/json')
  .set('Application' , 'wKvWyMJV5ab85DMYKpOD')
  .set('Accept' , 'application/json');

  constructor( private http: HttpClient) {
   }

   getCategories() {
     return this.http.get(`${this.baseUrl}/pages/all-actives/category` ,{
       headers : this.headers
     });
   }
}
