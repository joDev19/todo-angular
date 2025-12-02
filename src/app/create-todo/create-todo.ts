import { Component, inject } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router ,RouterLink } from "@angular/router";
import { AppService } from '../../service';

@Component({
  selector: 'app-create-todo',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-todo.html',
  styleUrl: './create-todo.css',
})
export class CreateTodo {
  titleControl = new FormControl('');
  dateEndControl = new FormControl('');
  private router = inject(Router);
  private appService = inject(AppService);
  check(event: Event){
    console.log(typeof this.dateEndControl.value);
    event.preventDefault();
    if(this.titleControl.value === '' || this.dateEndControl.value === ''){
      alert('Please fill in all fields');
      return ;
    }
    const newTodo = {
      id: this.appService.getLastId() + 1,
      title: this.titleControl.value as string,
      completed: false,
      endDate: new Date(this.dateEndControl.value as string)
    };
    this.appService.addTodo(newTodo);
    this.router.navigate(['/']);
  };
}
