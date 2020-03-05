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
  .set('Accept' , 'application/json')
  .set('x-auth' , 'LJu7xOia2ciOdm82M8H26qIzgH9x5SIaRxZwvLoFTj26YCLD2yT3QZo4BpQhRxia');

  constructor( private http: HttpClient) {
   }

   getCategories() {
     return this.http.get(`${this.baseUrl}/pages/all-actives/category` , {
       headers : this.headers
     });
   }

   getNews( id: string) {
    return this.http.get(`${this.baseUrl}/pages/${id}` , {
      headers : this.headers
    });
   }

   getFourteenDays(limit: number , offset: number) {
    return this.http.get(`${this.baseUrl}/challengeResults/text/module/fourteendays/external?order=id&type=desc&
    offset=${offset}&limit=${limit}` , {
      headers : this.headers
    });
   }

   getShoutBoxes() {
    return this.http.get(`${this.baseUrl}/shout-box/shorted` , {
      headers : this.headers
    });
   }

   getBirthdays(limit: number , offset: number) {
    return this.http.get(`${this.baseUrl}/users/birthdays?limit=${limit}&offset=${offset}` , {
      headers : this.headers
    });
   }

   getServices(limit: number , offset: number) {
    return this.http.get(`${this.baseUrl}/services?limit=${limit}&offset=${offset}` , {
      headers : this.headers
    });
   }

   getSpecificService(route: string) {
    return this.http.get(`${this.baseUrl}/services/module/${route}` , {
      headers : this.headers
    });
   }

   getComments(limit: number , id: string) {
    return this.http.get(`${this.baseUrl}/comments/modules/module/${id}?order=date&type=desc&limit=${limit}` , {
      headers : this.headers
    });
   }
}
