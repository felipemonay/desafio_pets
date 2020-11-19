import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { FormsModule } from '@angular/forms';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerViewComponent } from './owner-list/owner-view/owner-view.component';
import { NameComponent } from './components/fields/name/name.component';
import { PhoneComponent } from './components/fields/phone/phone.component';
import { EmailComponent } from './components/fields/email/email.component';
import { FilterOwnerTable } from 'src/app/shared/pipes/filter-owner-table.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerViewComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    NameComponent,
    PhoneComponent,
    EmailComponent,
    FilterOwnerTable,
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    OwnerRoutingModule,
    NgbModule
  ]
})
export class OwnerModule { }
