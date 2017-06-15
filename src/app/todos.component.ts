import { Component } from '@angular/core';

@Component({
  selector: 'dy-todos',
  template: `
    <form (submit)="addTodo()">
      <input name="newTodoTitle" [(ngModel)]="newTodoTitle" />
    </form>
    <ul>
      <li *ngFor="let todo of todos">
        <span [class.completed]="todo.completed">
          {{ todo.title }}
        </span>
        <button (click)="toggleCompletion(todo)">✅</button>
        <button (click)="remove(todo)">🚮</button>
      </li>
    </ul>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }

    button {
      -webkit-appearance: none;
      border: 0;
      background: none;
      padding: 0;
    }
  `]
})
export class TodosComponent {
  todos = [];
  newTodoTitle = '';
  constructor() { }

  addTodo() {
    this.todos = [
      ...this.todos,
      {
        title: this.newTodoTitle,
        completed: false
      }
    ];
    this.newTodoTitle = '';
  }

  toggleCompletion(todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, todoIndex),
      {
        title: todo.title,
        completed: !todo.completed
      },
      ...this.todos.slice(todoIndex + 1)
    ];
  }

  remove(todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, todoIndex),
      ...this.todos.slice(todoIndex + 1)
    ];
  }
}
