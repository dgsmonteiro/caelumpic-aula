import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../services/Foto.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  title: string = 'Cadastro de Foto';
  foto: FotoComponent;

  constructor(private fotoService : FotoService, private rota : ActivatedRoute) {
    this.foto = new FotoComponent;
    rota.params.subscribe((parametros) => {
      const idFoto = parametros._id;
      if(idFoto) {
        this.fotoService.consultar(idFoto)
                        .subscribe((resposta : HttpResponse<FotoComponent>) => this.foto = resposta.body);
      }
    })
    
   }

  ngOnInit() {
  }

  cadastraFoto(event: Event) {
    event.preventDefault();
    console.log(this.foto);


    this.fotoService.cadastrar(this.foto)
                    .subscribe(response => {

                      //Para Limpar o Form
                      this.foto = new FotoComponent;

                    })
  }
  editar (idFoto) {
    
  }

}
