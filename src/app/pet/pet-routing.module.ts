import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';

const petRoutes: Routes = [
{ path: '', component: PetListComponent },
{ path: 'create', component: PetCreateComponent },
{ path: 'update', component: PetUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(petRoutes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
