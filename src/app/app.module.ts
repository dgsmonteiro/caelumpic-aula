import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { FotoModule } from './components/foto/foto.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { CardModule } from './components/card/card.module';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { roteamento } from './routing'

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FotoModule,
    CabecalhoModule,
    HttpClientModule,
    CardModule,
    roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
