import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../auth/page/login-page.component';
import { TaskPageComponent } from './page/task-page.component';

const routes: Routes = [
    {
        path: '',
        component: TaskPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
