import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
import { HolmeChildTwoComponent } from './holme-child-two/holme-child-two.component';
import { ValidateSessionGuard } from './core/guards/validate-session.guard';


const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'auth', //* NECESITAMOS QUE SEA PUBLICA
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'task', //* NECESITAMOS QUE SEA PRIVADA
        loadChildren: () => import('./modules/task/task.module').then((m) => m.TaskModule),
        canActivate: [ValidateSessionGuard]
    }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
