import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';

const ownerRoutes: Routes = [
{ path: '', component: OwnerListComponent },
{ path: 'create', component: OwnerCreateComponent },
{ path: 'update', component: OwnerUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
