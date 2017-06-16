import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';
import { RootComponent } from './core/root.component';
import { coreReducer } from './core/core.reducer'
import { counterReducer } from './counter/counter.reducer';
import { todosReducer } from './todos/todos.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({
      core: coreReducer,
      counter: counterReducer,
      todos: todosReducer
    }),
    CoreModule
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
