import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdMenuModule,
    MdListModule
  ]
})
export class SharedModule { }
