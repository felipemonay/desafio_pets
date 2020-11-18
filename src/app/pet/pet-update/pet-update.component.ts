import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pet } from 'src/app/models/pet';
import { OwnerService } from 'src/app/owner/owner.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html'
})
export class PetUpdateComponent implements OnInit {

  pet: Pet = new Pet;

  constructor(private ownerService: OwnerService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute, private router: Router, private petService: PetService) { }

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

  send() {
    this.petService.updatePet(this.pet).subscribe(success => {
      this.toastrService.success('', 'Dados Gravados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/pet']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

}
