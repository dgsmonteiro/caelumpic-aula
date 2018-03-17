import { Component, Input } from '@angular/core';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent {
  @Input() title;
  subtitle = 'Aqui você pode ver suas fotos';
}
