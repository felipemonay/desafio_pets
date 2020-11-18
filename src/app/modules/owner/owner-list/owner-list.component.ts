import { Component, ErrorHandler, OnInit } from '@angular/core';
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
  public ownersList: Array<Owner>;
  public filter: Owner = new Owner;
  public page = 1;
  public pageSize = 6;
  public collectionSize = 1;
  public pageAmount = [2,4,6,8,10];

  constructor(private ownerService: OwnerService, private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getOwners();
  }

  public getOwners(){
    this.ownerService.getOwners().subscribe(data => {
      this.ownersList = data;
      this.collectionSize = this.ownersList.length;
      this.refreshOwners();
    }, error => {
        return new ErrorHandler();
    });
  }

  refreshOwners() {
    this.owners = this.ownersList
      .map((owner, i) => ({id: i + 1, ...owner}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  open(owner) {
    const modalRef = this.modalService.open(OwnerViewComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.owner = owner;
  }

  createOwner() {
    this.router.navigate(['owner/create']);
  };

}
