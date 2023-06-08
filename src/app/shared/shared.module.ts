import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacesPipe } from './pipes/replace-spaces.pipe';



@NgModule({
  declarations: [
    ReplaceSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceSpacesPipe
  ],
  providers: [ReplaceSpacesPipe]
})
export class SharedModule { }
