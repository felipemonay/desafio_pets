import { Component, ErrorHandler, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/modules/pet/pet.service';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-owner-view',
  templateUrl: './owner-view.component.html'
})
export class OwnerViewComponent {

  @Input() set owner(owner){
    this._owner = owner;
    this.getOwnerPets(owner.id);
  };

  public _owner: Owner;
  public pets: Array<Pet>;
  public petList: Array<Pet> = [];

  constructor(
    private ownerService: OwnerService, 
    public activeModal: NgbActiveModal,
    private petService: PetService) {}

  public getOwnerPets(id){    
    this.petService.getPets().subscribe(data => {
      this.pets = data;
      this.generatePetTableData();       
    }, error => {
        return new ErrorHandler();
    });
  }

  public generatePetTableData(){
    this.pets.map((pet) => {
      if(pet.ownerId === this._owner.id){
        this.petList.push(pet);
      }
      return pet;
    });
  }

}
