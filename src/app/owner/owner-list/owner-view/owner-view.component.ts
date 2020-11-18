import { Component, ErrorHandler, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner } from 'src/app/models/owner';
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
  public pets: any;

  constructor(private ownerService: OwnerService, public activeModal: NgbActiveModal) {}

  getOwnerPets(id){    
    this.ownerService.getOwnerPets(id).subscribe(data => {
      this.pets = data;      
    }, error => {
        return new ErrorHandler();
    });
  }

}
