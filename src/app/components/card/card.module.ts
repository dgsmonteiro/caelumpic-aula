import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { FotoModule } from '../foto/foto.module';
import { FiltraPorTituloPipe } from './filtraPotTitulo.pipe';


@NgModule({
  declarations: [
    CardComponent,
    FiltraPorTituloPipe
  ],
  exports: [
    CardComponent,
    FiltraPorTituloPipe
  ],
  imports: [
    FotoModule
  ]
})
export class CardModule { }
