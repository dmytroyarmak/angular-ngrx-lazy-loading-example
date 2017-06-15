import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { RootComponent } from './core/root.component';
import { LayoutComponent } from './core/layout.component';
import { NavigationComponent } from './core/navigation.component';
import { LoginComponent } from './core/login.component';
import { AuthGuard } from "./core/auth.guard";
import { AuthService } from "./core/auth.service";

import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';

import { TodosComponent } from './todos/todos.component';

const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'counter'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'counter',
        component: CounterComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    RootComponent,
    CounterComponent,
    TodosComponent,
    NavigationComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ counter: counterReducer })
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
