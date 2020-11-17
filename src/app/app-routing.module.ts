import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo: 'owner', pathMatch: 'full' },
  { path:'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
  { path:'pet', loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
