import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import Swal from 'sweetalert2';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html'
})
export class PetUpdateComponent implements OnInit {

  pet: Pet = new Pet;
  public owners: Array<Owner>;

  constructor(private toastrService: ToastrService, private activatedRoute: ActivatedRoute, private router: Router, private petService: PetService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getPet(params['id']);
    });
  }

  public getPet(id){
    this.petService.getPetById(id).subscribe(data => {
      this.pet = data;
    }, error => {
        return new ErrorHandler();
    });
  }

  public send() {
    Swal.fire({
      title: 'Atenção',
      text: 'Deseja atualizar os dados de '+ this.pet.name + ' ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((response: any) => {
      if (!response.dismiss) {
        this.updatePet();
      }
    });
  }

  public updatePet(){
    this.petService.updatePet(this.pet).subscribe(success => {
      this.toastrService.success('', 'Dados Gravados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/pet']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

  public delete(){
    Swal.fire({
      title: 'Atenção',
      text: 'Deseja deletar o dono '+ this.pet.name + ' ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((response: any) => {
      if (!response.dismiss) {
        this.deletePet();
      }
    });
  }

  private deletePet(){
    this.petService.deletePet(this.pet.id).subscribe(success => {
      this.toastrService.success('', 'Pet apagado com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/pet']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

}
