import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    // {
    //     path: '',
    //     component: TestComponent

    // },
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    // },
    // {
    //     path: 'task',
    //     loadChildren: () => import('./modules/task/task.module').then((m) => m.TaskModule)
    // }
    {
        path: '',
        component: HomeComponent
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
