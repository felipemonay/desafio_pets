import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html'
})
export class OwnerUpdateComponent implements OnInit {
  
  public owner: Owner = new Owner;

  constructor(private ownerService: OwnerService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getOwner(params['id']);
    })
  }

  public getOwner(id){
    this.ownerService.getOwnerById(id).subscribe(data => {
      this.owner = data;
      console.log('owner',this.owner);
    }, error => {
        return new ErrorHandler();
    });
  }

  send() {
    this.ownerService.updateOwner(this.owner).subscribe(success => {
      this.toastrService.success('', 'Dados Gravados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/owner']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

}

