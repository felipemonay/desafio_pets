import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl: string = 'https://5f779702d5c9cb001623760a.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  getPets() {
    const url = this.baseUrl + '/pets';
    console.log('url', url);
    
    return this.http.get<Array<Pet>>(url);
  }

  public getPetById(id:number){
    const url = this.baseUrl + `/pets/${id}`;
    return this.http.get<Pet>(url);
  }
  
  public updatePet(pet: Pet){
    const url = this.baseUrl + `/pets/${pet.id}`;
    return this.http.put(url, pet);
  }

  public createPet(pet: Pet){
    const url = this.baseUrl + `/pets`;
    return this.http.post<Pet>(url, pet);
  }

  public deletePet(id: number) {
    const url = this.baseUrl + `/pets/${id}`;
    return this.http.delete(url);
  }

}
