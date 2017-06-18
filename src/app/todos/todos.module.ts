import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { todosReducer, TodosState } from './todos.reducer';
import { CoreAppState } from '../core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './todos.effects';
import { StoreModule } from '@ngrx/store';

export interface TodosAppState extends CoreAppState {
  todos: TodosState;
}

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    TodosRoutingModule
  ],
  declarations: [
    TodosComponent
  ]
})
export class TodosModule {}
