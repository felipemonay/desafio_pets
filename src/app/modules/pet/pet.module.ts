import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PetRoutingModule } from './pet-routing.module';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NameComponent } from './components/fields/name/name.component';
import { NicknameComponent } from './components/fields/nickname/nickname.component';
import { OwnerComponent } from './components/fields/owner/owner.component';
import { BreedComponent } from './components/fields/breed/breed.component';
import { SpeciesComponent } from './components/fields/species/species.component';
import { FilterPetTable } from 'src/app/shared/pipes/filter-pet-table.pipe';



@NgModule({
  declarations: [
    PetCreateComponent, 
    PetListComponent,
    PetUpdateComponent,
    NameComponent,
    NicknameComponent,
    OwnerComponent,
    BreedComponent,
    SpeciesComponent,
    FilterPetTable
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    PetRoutingModule,
    NgSelectModule
  ]
})
export class PetModule { }
