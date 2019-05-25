import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'livro', loadChildren: './livro/livro.module#LivroPageModule' },
  { path: 'add-livro', loadChildren: './add-livro/add-livro.module#AddLivroPageModule' },
  { path: 'livro/:id', loadChildren: './livro/livro.module#LivroPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
