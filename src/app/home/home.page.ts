import { Component } from '@angular/core';
import { LivroService, Livro } from 'src/app/services/livro.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  livros: Observable<Livro[]>;
  constructor(public livroService: LivroService) {
    this.livros = this.livroService.getLivros();
  }
}
