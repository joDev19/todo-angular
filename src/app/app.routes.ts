import { Routes } from '@angular/router';
import { AppComponent } from './app-component/app-component';
import { CreateTodo } from './create-todo/create-todo';
import { UpdateTodo } from './update-todo/update-todo';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'create-todo',
    component: CreateTodo
  },
  {
    path: 'update-todo/:id',
    component: UpdateTodo,
  }
];
