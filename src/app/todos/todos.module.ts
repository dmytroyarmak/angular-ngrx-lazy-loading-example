import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReducerManager } from '../core/reducer-manager.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { todosReducer } from './todos.reducer';

@NgModule({
  imports: [
    SharedModule,
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
