import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerViewComponent } from './owner-list/owner-view/owner-view.component';


@NgModule({
  declarations: [OwnerCreateComponent, OwnerUpdateComponent, OwnerListComponent, OwnerViewComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
