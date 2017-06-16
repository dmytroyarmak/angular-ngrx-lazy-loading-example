import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

import { StoreModule } from '@ngrx/store';
import { todosReducer } from 'app/todos/todos.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.provideStore({
      todos: todosReducer
    }),
    TodosRoutingModule
  ],
  declarations: [
    TodosComponent
  ]
})
export class TodosModule { }
