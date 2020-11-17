import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { OwnerService } from 'src/app/owner/owner.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html'
})
export class PetListComponent implements OnInit {
  
  public pets: Array<Pet>;

  constructor(private petService: PetService,private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getPets();
  }

  public getPets(){
    this.petService.getPets().subscribe(data => {
      this.pets = data;
        this.pets.map((pet) => {
          this.getOwner(pet);
          return pet;
        }); 
    }, error => {
        return new ErrorHandler();
    });
  }

  public getOwner(pet){
    this.ownerService.getOwnerById(pet.id).subscribe(data => {
      pet.ownerName = data.name;
      pet.ownerPhone = data.phone;
    }, error => {
        return new ErrorHandler();
    });

  }

}
