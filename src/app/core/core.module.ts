import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { RootComponent } from './root.component';
import { LoginComponent } from './login.component';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    LayoutComponent,
    NavigationComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule { }
