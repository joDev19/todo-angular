import { Injectable } from '@angular/core';
import Todo from './type';
@Injectable({ providedIn: 'root' })
export class AppService {
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
      inUpdating: false,
      endDate: new Date('2025-12-31'),
    },
    {
      id: 2,
      title: 'Build a Todo App',
      completed: false,
      inUpdating: false,
      endDate: new Date('2026-01-01'),
    },
  ];
  getTodos() {
    return this.todoList;
  }
  getTodo(id: number): Todo | undefined{
    return this.todoList.find( todo => todo.id === id );
  }
  updateTodo(id: number, updatedTodoValues: Partial<Todo>): void {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodoValues } : todo
    );
  }
  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }
  getLastId(): number {
    return this.todoList.length > 0
      ? this.todoList[this.todoList.length - 1].id
      : 0;
  }
  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
