import { Component } from '@angular/core';
import { LivroService, Livro } from 'src/app/services/livro.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-livro',
  templateUrl: 'livro.page.html',
  styleUrls: ['livro.page.scss']
})
export class LivroPage {

  livros: Observable<Livro[]>;
  livro: Livro;
  constructor(private activatedRoute: ActivatedRoute, public livroService: LivroService) {
    this.livros = this.livroService.getLivros();
  }


  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.livroService.getLivro(id).subscribe(livro => {
        this.livro = livro;
      });
    }
  }

  adicionarLivro() {
    const livro: Livro = {
      titulo : 'nome da rosa',
      emprestado: false
    };

    this.livroService.addLivro(livro);

  }
}
