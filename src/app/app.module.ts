import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { RootComponent } from './core/root.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
