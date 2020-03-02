import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarBoxComponent } from './sidebar/sidebar-box/sidebar-box.component';
import { ContentLinkComponent } from './content-link/content-link.component';
import { QuoteComponent } from './quote/quote.component';
import { ContentDiscussComponent } from './content-discuss/content-discuss.component';
import { PagesComponent } from './pages/pages/pages.component';
import { NewsComponent } from './pages/news/news.component';
import { MessageComponent } from './message/message.component';
import { BrainComponent } from './pages/brain/brain.component';
import { ActivePartComponent } from './active-part/active-part.component';
import { CommentsComponent } from './comments/comments.component';
import { from } from 'rxjs';
import { ContentService } from './services/content.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    SidebarComponent,
    SidebarBoxComponent,
    ContentLinkComponent,
    QuoteComponent,
    ContentDiscussComponent,
    PagesComponent,
    NewsComponent,
    MessageComponent,
    BrainComponent,
    ActivePartComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
