import { Component, ErrorHandler, Input, OnInit, ViewChild } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { OwnerService } from 'src/app/owner/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html'
})
export class OwnerComponent implements OnInit {

  // @ViewChild('owner') owner: any;
  public name: string = 'owner';
  public label: string = 'Dono';
  public help: string = 'Informar o dono do pet.';
  public owners: Array<Owner>;
  public _pet: Pet;

  @Input() pet: Pet;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  public getOwners(){
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;      
    }, (err) => {
      return new ErrorHandler();
    });
  }

}
