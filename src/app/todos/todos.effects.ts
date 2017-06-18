import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ADD, AddAction, AddSuccessAction } from './todos.reducer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/from';

const SAMPLE_TODOS = [
  'Find what to talk about',
  'Research topic',
  'Make demo app',
  'Write outline',
  'Prepare slides',
  'Practice',
  'Practice',
  'Practice',
  'Deliver',
  'Done'
];

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect() sampleTodos$ = Observable.zip(
    this.actions$.ofType(ADD).filter((action: AddAction) => !action.payload),
    Observable.from(SAMPLE_TODOS),
    (_, sampleTodoTitle) => new AddSuccessAction(sampleTodoTitle));

  @Effect() originalTodos$ = this.actions$
    .ofType(ADD)
    .filter((action: AddAction) => !!action.payload)
    .map((action: AddAction) => new AddSuccessAction(action.payload));
}
