import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'examinations',
    component: ExaminationsComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
