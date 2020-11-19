import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { OwnerService } from '../../owner/owner.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html'
})
export class PetListComponent implements OnInit {
  
  public pets: Array<Pet>;
  public owners: Array<Owner>;
  public filter: Pet = new Pet;

  constructor(
    private petService: PetService,
    private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getPets();
  }

  public getPets(){
    this.petService.getPets().subscribe(data => {
      this.pets = data;
      this.getOwner();       
    }, error => {
        return new ErrorHandler();
    });
  }

  public getOwner(){
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
      this.generatePetTableData();
    }, error => {
        return new ErrorHandler();
    });
  }

  public generatePetTableData(){
    this.pets.map((pet) => {
      let owner = this.owners.find((owner) => owner.id === pet.ownerId);
      if(owner){
        pet.ownerName = owner.name;
        pet.ownerPhone = owner.phone;
      }
      return pet;
    });    
  }

}
