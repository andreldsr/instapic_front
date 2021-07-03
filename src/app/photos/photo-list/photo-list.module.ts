import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoRowComponent } from './photo-row/photo-row.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescriptionPipe } from '../filter-by-description.pipe';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from './../../shared/components/card/card.module';



@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoRowComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    CommonModule,
    RouterModule
  ]
})
export class PhotoListModule { }
