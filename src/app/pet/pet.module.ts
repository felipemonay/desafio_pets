import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PetRoutingModule } from './pet-routing.module';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    PetCreateComponent, 
    PetListComponent,
    PetUpdateComponent
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
