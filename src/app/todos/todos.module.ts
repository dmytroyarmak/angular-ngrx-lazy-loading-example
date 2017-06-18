import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReducerManager } from '../core/reducer-manager.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { todosReducer, TodosState } from './todos.reducer';
import { CoreAppState } from '../core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos.effects';

export interface TodosAppState extends CoreAppState {
  todos: TodosState;
}

@NgModule({
  imports: [
    SharedModule,
    EffectsModule.run(TodosEffects),
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
