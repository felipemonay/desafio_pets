import { Component, ErrorHandler } from '@angular/core';
import { Location } from '@angular/common';
import { Owner } from 'src/app/models/owner';
import { ToastrService } from 'ngx-toastr';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html'
})
export class OwnerCreateComponent {
  public owner: Owner = new Owner;

  constructor(
    private ownerService: OwnerService, 
    private toastrService: ToastrService, 
    private router: Router, 
    private locationService: Location) { }

  public send() {
    if(this.owner.name.length <3){
      return Swal.fire('Atenção', 'O nome está muito curto!');
    }

    if(this.owner.email.indexOf('@')=== -1){
      return Swal.fire('Atenção', 'O e-mail é invalido!');
    }

    if(this.owner.phone.length < 10){
      return Swal.fire('Atenção', 'O telefone deve conter ao menos 10 caracteres ex:(11) 1234-5678');
    }
    
    this.ownerService.createOwner(this.owner).subscribe(() => {
      this.toastrService.success('', 'Dados Gravados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/owner']);
    }, () => {
      return new ErrorHandler();
    });
  }

  public back() {
    this.locationService.back();
  }
}
