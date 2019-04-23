import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './article/article.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';

import { HttpClientModule }    from '@angular/common/http';

import { PageContainerComponent } from './page-container/page-container.component';
import { PageContentComponent } from './page-content/page-content.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ArticleComponent,
    PageWrapperComponent,
    PageContainerComponent,
    PageContentComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }