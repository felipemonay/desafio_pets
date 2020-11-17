import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo: 'owner', pathMatch: 'full' },
  { path:'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
