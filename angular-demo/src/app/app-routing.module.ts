import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './main/components/blank-layout/blank-layout.component';
import { FullLayoutComponent } from './main/components/full-layout/full-layout.component';



const routes: Routes = [
{
  path : '',
  component : FullLayoutComponent,

  children: [
   {
     path : '',
     loadChildren: () => import('./main/main.module').then(x => x.MainModule)
   }

  ]
},
{
  path : '',
  component : BlankLayoutComponent,

  children: [
   {
     path : '',
     loadChildren: () => import('./main/components/user/user.module').then(x => x.UserModule)
   }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
