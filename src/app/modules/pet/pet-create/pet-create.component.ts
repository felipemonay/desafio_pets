import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html'
})
export class PetCreateComponent implements OnInit {

  public pet: Pet = new Pet;
  public owners: Array<Owner>;

  constructor(
    private petService: PetService, 
    private toastrService: ToastrService, 
    private router: Router,
    private locationService: Location) { }

  ngOnInit(): void {
  }

  public send() {
    this.petService.createPet(this.pet).subscribe(success => {
      this.toastrService.success('', 'Dados Gravados com sucesso!', {timeOut: 1000});
      return this.router.navigate(['/pet']);
    }, (err) => {
      return new ErrorHandler();
    });
  }

  public back() {
    this.locationService.back();
  }

}
