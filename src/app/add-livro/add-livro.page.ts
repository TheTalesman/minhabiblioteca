import { Component } from '@angular/core';
import { LivroService, Livro } from 'src/app/services/livro.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-add-livro',
  templateUrl: 'add-livro.page.html',
  styleUrls: ['add-livro.page.scss']
})


export class AddLivroPage {

  livro: Livro;
  constructor(private camera: Camera, private activatedRoute: ActivatedRoute, public livroService: LivroService) {
    this.livro = new Livro();
  }

  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.livroService.getLivro(id).subscribe(livro => {
        this.livro = livro;
      });
    }
  }

  tiraFoto() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.livro.caminhoFoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }
  mudaToogle($val) {
    console.log($val);
  }
  adicionarAddLivro() {
    const livro: Livro = {
      titulo: 'nome da rosa',
      emprestado: false
    };

    this.livroService.addLivro(livro);

  }
}
