import { Component, ErrorHandler, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Owner } from 'src/app/models/owner';
import { ToastrService } from 'ngx-toastr';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html'
})
export class OwnerCreateComponent {
  public owner: Owner = new Owner;

  constructor(private ownerService: OwnerService, private toastrService: ToastrService, private router: Router) { }

  send() {
    this.ownerService.createOwner(this.owner).subscribe(success => {
      this.toastrService.success('', 'Dados Gravados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/owner']);
    }, (err) => {
      return new ErrorHandler();
    });
  }
}
