import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowAnswerPage } from './show-answer';

@NgModule({
  declarations: [
    ShowAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowAnswerPage),
  ],
})
export class ShowAnswerPageModule {}
