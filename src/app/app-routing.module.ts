import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages/pages.component';
import { NewsComponent } from './pages/news/news.component';
import { BrainComponent } from './pages/brain/brain.component';


const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'news/:id/:slug',
    component: NewsComponent
  },
  {
    path: 'brain',
    component: BrainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
