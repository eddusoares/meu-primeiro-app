import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { HomeComponent } from './home/home';
import { PostAutenticacao } from './post-autenticacao/post-autenticacao';
import { PostHeadersCustomizadosComponent } from './post-headers-customizados/post-headers-customizados';
import { PostSendFiles } from './post-send-files/post-send-files';
import { PostsComponent } from './posts/posts';
import { Saudacao } from './saudacao/saudacao';
import { SobreComponent } from './sobre/sobre';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'saudacao', component: Saudacao },
  { path: 'cadastro', component: Cadastro },
  { path: 'posts', component: PostsComponent },
  { path: 'posts-headers', component: PostHeadersCustomizadosComponent },
  { path: 'posts-autenticacao', component: PostAutenticacao },
  { path: 'posts-file-send', component: PostSendFiles },
];
