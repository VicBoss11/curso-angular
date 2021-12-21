import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/_shared/card/card.component';
import { ModalInfoComponent } from './components/_shared/modal-info/modal-info.component';
import { SearcherComponent } from './components/_shared/searcher/searcher.component';
import { ListComponent } from './components/_shared/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLogoComponent } from './components/_shared/main-logo/main-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ModalInfoComponent,
    SearcherComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    MainLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
