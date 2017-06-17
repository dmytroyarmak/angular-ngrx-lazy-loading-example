import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule } from '@angular/material';

import { ReducerManager } from '../core/reducer-manager.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { todosReducer } from './todos.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
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
