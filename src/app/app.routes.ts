import { Routes } from '@angular/router';
import { AppComponent } from './app-component/app-component';
import { CreateTodo } from './create-todo/create-todo';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'create-todo',
    component: CreateTodo
  }
];
