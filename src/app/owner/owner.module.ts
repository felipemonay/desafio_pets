import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { FormsModule } from '@angular/forms';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerViewComponent } from './owner-list/owner-view/owner-view.component';



@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerViewComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
