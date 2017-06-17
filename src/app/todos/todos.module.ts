import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReducerManager } from '../core/reducer-manager.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { todosReducer } from './todos.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ],
  declarations: [
    TodosComponent
  ]
})
export class TodosModule {
  constructor(reducerManager: ReducerManager) {
    reducerManager.addReducer('todos', todosReducer);
  }
}
