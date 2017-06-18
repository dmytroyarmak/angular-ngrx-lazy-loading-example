import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { RootComponent } from './root.component';
import { LoginComponent } from './login.component';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { coreReducer, CoreState } from './core.reducer';
import { ToolbarComponent } from './toolbar.component';
import { AuthEffects } from './auth.effects';

export interface CoreAppState {
  core: CoreState
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot({
      core: coreReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [
    RootComponent,
    LoginComponent,
    LayoutComponent,
    NavigationComponent,
    ToolbarComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {}
