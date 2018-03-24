import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  title: string = 'Cadastro de Foto';
  foto: FotoComponent;

  constructor(private httpClient : HttpClient) {
    this.foto = new FotoComponent;
   }

  ngOnInit() {
  }

  cadastraFoto(event: Event) {
    event.preventDefault();
    console.log(this.foto);

    const cabecalho = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    this.httpClient.post('http://localhost:3000/v1/fotos', 
                          JSON.stringify(this.foto), 
                          {headers: cabecalho})
                    .subscribe(response => {
                      this.foto = new FotoComponent;
                    })
  }

}
