import { Component } from '@angular/core';
import { LivroService, Livro } from 'src/app/services/livro.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  livros: Observable<Livro[]>;
  constructor(public livroService: LivroService) { this.livros = this.livroService.getLivros(); }
  adicionarLivro() {
    const livro: Livro = {
      name : 'nome da rosa'
    };
    livro.name = ' nome da rosa';
    this.livroService.addLivro(livro);

  }
}
