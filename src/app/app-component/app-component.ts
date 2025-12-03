import { Component, inject } from '@angular/core';
import { AppService } from '../../service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-component',
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {
  private appService = inject(AppService);
  todos = this.appService.getTodos();
  formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
  checkIfDatepassed(date: Date): boolean {
    const currentDate = new Date();
    return date < currentDate;
  }
  deleteTodo(id: number): void{
    this.appService.deleteTodo(id);
    this.todos = this.appService.getTodos();
  }
  trashIcon = faTrash;
}
