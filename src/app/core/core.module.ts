import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CoreRoutingModule } from './core-routing.module';
import { RootComponent } from './root.component';
import { LoginComponent } from './login.component';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ReducerManager } from './reducer-manager.service';
import { coreReducer } from './core.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.provideStore({
      core: coreReducer
    }),
    CoreRoutingModule
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    LayoutComponent,
    NavigationComponent
  ],
  providers: [
    ReducerManager,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {}
