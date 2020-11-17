import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { PetListComponent } from './pet-list/pet-list.component';


@NgModule({
  declarations: [PetCreateComponent, PetUpdateComponent, PetListComponent],
  imports: [
    CommonModule,
    PetRoutingModule
  ]
})
export class PetModule { }
