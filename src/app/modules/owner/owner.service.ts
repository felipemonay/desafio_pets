import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from 'src/app/models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  baseUrl: string = 'https://5f779702d5c9cb001623760a.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  public getOwners() {
    const url = this.baseUrl + '/owner';
    return this.http.get<Array<Owner>>(url);
  }

  public getOwnerById(id:number){
    const url = this.baseUrl + `/owner/${id}`;
    return this.http.get<Owner>(url);
  }

  public getOwnerPets(id:number){
    const url = this.baseUrl + `/owner/${id}/pets`;
    return this.http.get<Owner>(url);
  }
  
  public updateOwner(owner: Owner){
    const url = this.baseUrl + `/owner/${owner.id}`;
    return this.http.put(url, owner);
  }

  public createOwner(owner: Owner){
    const url = this.baseUrl + `/owner`;
    return this.http.post<Owner>(url, owner);
  }

  public deleteOwner(id: number) {
    const url = this.baseUrl + `/owner/${id}`;
    return this.http.delete(url);
  }
}
