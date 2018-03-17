import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Galeria de Fotos';
  fotos: Array<Object> = [
    {url: '/assets/img/carro01.jpg', descricao: 'Carrão'},
    {url: '/assets/img/carro02.jpg', descricao: 'Carro Velho'}
  ];


  constructor(@Inject(HttpClient) httpClient) {
    console.log(httpClient);
    httpClient.get('http://localhost:3000/v1/fotos')
              .subscribe((dados) => {
                this.fotos = dados;
              });
  }
}