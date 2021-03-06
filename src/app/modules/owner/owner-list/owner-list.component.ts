import { Component, ErrorHandler, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from '../owner.service';
import { OwnerViewComponent } from './owner-view/owner-view.component';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html'
})
export class OwnerListComponent implements OnInit {

  public owners: Array<Owner>;
  public filter: Owner = new Owner;

  constructor(
    private ownerService: OwnerService, 
    private router: Router, 
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getOwners();
  }

  public getOwners(){
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    }, error => {
        return new ErrorHandler();
    });
  }

  public open(owner) {
    const modalRef = this.modalService.open(OwnerViewComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.owner = owner;
  }

  public createOwner() {
    this.router.navigate(['owner/create']);
  };

}
