import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../services/Foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  title: string = 'Cadastro de Foto';
  subtitle: string = 'Subtitulo da página de cadastro de fotos';
  foto: FotoComponent;
  textoBotao: string;
  formCadastro : FormGroup

  constructor(private formBuilder: FormBuilder, private fotoService : FotoService, private rota : ActivatedRoute, private router : Router) {
    this.foto = new FotoComponent;
    this.formCadastro = formBuilder.group({
      url: ['', Validators.required],
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      descricao: []
    });
    rota.params.subscribe((parametros) => {
      const idFoto = parametros._id;
      if(idFoto) {
        this.fotoService.consultar(idFoto)
                        .subscribe((resposta : HttpResponse<FotoComponent>) => this.foto = resposta.body);
        this.textoBotao = 'Editar';
      } else {
        this.textoBotao = 'Salvar';
      }
    });
   }

   

  ngOnInit() {
  }

  cadastraFoto(event: Event) {
    event.preventDefault();
    if (!this.foto._id) {
      this.fotoService.cadastrar(this.foto)
      .subscribe((response) => {
        //Para Limpar o Form
        this.foto = new FotoComponent;

      })
    } else {
      this.fotoService.alterar(this.foto)
                      .subscribe((response) => {
                        this.router.navigate(['/'])
                      })
    }
    
  }

}
