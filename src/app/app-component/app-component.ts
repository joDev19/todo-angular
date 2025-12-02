import { Component, inject } from '@angular/core';
import { AppService } from '../../service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-component',
  imports: [RouterLink, CommonModule],
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
}
