import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { TodosComponent } from './todos.component';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

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
    AppComponent,
    CounterComponent,
    TodosComponent,
    NavigationComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
