import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http'
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


  constructor(private fotoService : FotoService) {
   
  }

  ngOnInit() {

    this.fotoService.lista()
    //Fazer o AJAX - Faz chamada pra qualquer dispositivo
              .subscribe((dados: HttpResponse<FotoComponent[]>) => {
                this.fotos = dados.body;
              });
  }

  remover(idFoto) {
    this.fotoService.remover(idFoto)
                    .subscribe((foto) => {
                      const fotosAtualizadas = this.fotos.filter((foto) => foto._id !== idFoto)
                      this.fotos = fotosAtualizadas;
                    })
    
  }
  
}
