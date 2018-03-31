import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { FotoModule } from './components/foto/foto.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { CardModule } from './components/card/card.module';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { roteamento } from './routing';
import { Page404Component } from './pages/page404/page404.component';

import { FotoService } from './services/Foto.service'

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    CadastroComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FotoModule,
    CabecalhoModule,
    HttpClientModule,
    CardModule,
    roteamento,
    FormsModule
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
