import { Component, inject, input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../../service';
import Todo from '../../type';

@Component({
  selector: 'app-update-todo',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './update-todo.html',
  styleUrl: './update-todo.css',
})
export class UpdateTodo {
  private router = inject(Router);
  private appService = inject(AppService);
  private activatedRoute = inject(ActivatedRoute);
  private id: number = 0;

  currentTodo = signal<Todo | undefined>(undefined);
  titleControl: FormControl<any> = new FormControl();
  endDateControl: FormControl<any> = new FormControl();

  constructor() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const todo = this.appService.getTodo(this.id);
    if (todo) {
      this.currentTodo.set(todo);
      this.titleControl.setValue(todo.title);
      this.endDateControl.setValue(todo.endDate!.toISOString().split('T')[0]);
    }
  }

  check(event: Event) {
    console.log(typeof this.endDateControl.value);
    event.preventDefault();
    if (this.titleControl.value === '' || this.endDateControl.value === '') {
      alert('Please fill in all fields');
      return;
    }
    this.appService.updateTodo(this.currentTodo()!.id, {
      title: this.titleControl.value as string,
      endDate: new Date(this.endDateControl.value as string),
      inUpdating: false,
    });
    this.router.navigate(['/']);
  }
}
