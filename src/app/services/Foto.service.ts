import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FotoComponent } from "../components/foto/foto.component";


@Injectable()
export class FotoService {
    constructor (private httpClient: HttpClient) {
        
    }
    URL: string = 'http://localhost:3000/v1/fotos';
    

    lista() : Observable<Object> {
       return this.httpClient.get(this.URL, { observe: 'response'}) ;
    }
    cadastrar(foto : FotoComponent) : Observable<Object> {
        const cabecalho = new HttpHeaders({
            'Content-Type': 'application/json'
          })

        return this.httpClient.post(this.URL, 
        JSON.stringify(foto), 
        {headers: cabecalho});
    }
    alterar(foto : FotoComponent) : Observable<Object> {
        const cabecalho = new HttpHeaders({
            'Content-Type': 'application/json'
          })

        return this.httpClient.put(`${this.URL}/${foto._id}`, 
        JSON.stringify(foto), 
        {headers: cabecalho});
    }
    remover (idFoto:string) : Observable<Object> {
        return this.httpClient.delete(`${this.URL}/${idFoto}`,{observe: 'response'})
    }

    consultar (idFoto:string) : Observable<Object> {
        return this.httpClient.get(`${this.URL}/${idFoto}`,{observe: 'response'})
    }
}