import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http'
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../services/Foto.service'


@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {


  title: string = 'Galeria de Fotos';
  fotos: Array<FotoComponent> = [ ];


  constructor(private httpClient: HttpClient, private fotoService : FotoService) {
   
  }

  ngOnInit() {

    this.fotoService.lista();
    //Fazer o AJAX - Faz chamada pra qualquer dispositivo
    this.httpClient.get('http://localhost:3000/v1/fotos', { observe: 'response'})
              .subscribe((dados: HttpResponse<FotoComponent[]>) => {
                console.log('Dados: ', dados);
                this.fotos = dados.body;
              });
  }
  
}
