import { Component, computed, inject, signal } from '@angular/core';
import { AppService } from '../../service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPen, faClose } from '@fortawesome/free-solid-svg-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-component',
  imports: [RouterLink, CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {
  private appService = inject(AppService);
  todos = this.appService.getTodos();
  searchedtitleControl: FormControl<string> = new FormControl();

  filteredTodo = () => {
    if (this.searchedtitleControl.value) {
      return this.todos.filter((todo) =>
        todo.title
          .toLocaleLowerCase()
          .includes(this.searchedtitleControl.value.toLocaleLowerCase())
      );
    }
    return this.todos;
  };
  formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
  checkIfDatepassed(date: Date): boolean {
    const currentDate = new Date();
    return date < currentDate;
  }
  deleteTodo(id: number): void {
    this.appService.deleteTodo(id);
    this.todos = this.appService.getTodos();
  }
  test() {
    console.log('Testeur');
  }
  trashIcon = faTrash;
  penIcon = faPen;
  closeIcon = faClose;
}
