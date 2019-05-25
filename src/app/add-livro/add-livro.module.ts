import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddLivroPage } from './add-livro.page';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddLivroPage }])
  ],
  declarations: [AddLivroPage],
  providers: [ Camera
  ]
})
export class AddLivroPageModule {}
