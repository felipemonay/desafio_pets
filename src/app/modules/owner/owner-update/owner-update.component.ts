import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from '../owner.service';
import Swal from 'sweetalert2'

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
    }, error => {
        return new ErrorHandler();
    });
  }

  public send() {
    Swal.fire({
      title: 'Atenção',
      text: 'Deseja atualizar os dados de '+ this.owner.name + ' ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((response: any) => {
      if (!response.dismiss) {
        this.updateOwner();
      }
    });
  }

  private updateOwner(){
    this.ownerService.updateOwner(this.owner).subscribe(success => {
      this.toastrService.success('', 'Dados atualizados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/owner']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

  public delete(){
    Swal.fire({
      title: 'Atenção',
      text: 'Deseja deletar o dono '+ this.owner.name + ' ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((response: any) => {
      if (!response.dismiss) {
        this.deleteOwner();
      }
    });
  }

  private deleteOwner(){
    this.ownerService.deleteOwner(this.owner.id).subscribe(success => {
      this.toastrService.success('', 'Dono apagado com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/owner']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

}

