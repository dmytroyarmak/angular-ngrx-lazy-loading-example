import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdTabsModule, MdToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdMenuModule,
    StoreModule.provideStore({
      core: coreReducer
    }),
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
    ReducerManager,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {}
