import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Livro {
  id?: string,
  name: string,
  notes?: string
}
 
@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Observable<Livro[]>;
  private livroCollection: AngularFirestoreCollection<Livro>;
 
  constructor(private afs: AngularFirestore) {
    this.livroCollection = this.afs.collection<Livro>('livros');
    this.livros = this.livroCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getLivros(): Observable<Livro[]> {
    return this.livros;
  }
 
  getLivro(id: string): Observable<Livro> {
    return this.livroCollection.doc<Livro>(id).valueChanges().pipe(
      take(1),
      map(livro => {
        livro.id = id;
        return livro
      })
    );
  }
 
  addLivro(livro: Livro): Promise<DocumentReference> {
    return this.livroCollection.add(livro);
  }
 
  updateLivro(livro: Livro): Promise<void> {
    return this.livroCollection.doc(livro.id).update({ name: livro.name, notes: livro.notes });
  }
 
  deleteLivro(id: string): Promise<void> {
    return this.livroCollection.doc(id).delete();
  }
}