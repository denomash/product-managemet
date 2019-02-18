import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StarRatingComponent,
    FormsModule
  ]
})
export class SharedModule { }
