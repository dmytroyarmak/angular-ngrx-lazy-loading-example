import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

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
export class TodosModule { }
