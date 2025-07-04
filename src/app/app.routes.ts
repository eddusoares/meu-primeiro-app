import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { HomeComponent } from './home/home';
import { PostsComponent } from './posts/posts';
import { Saudacao } from './saudacao/saudacao';
import { SobreComponent } from './sobre/sobre';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'saudacao', component: Saudacao },
  { path: 'cadastro', component: Cadastro },
  { path: 'posts', component: PostsComponent },
];
