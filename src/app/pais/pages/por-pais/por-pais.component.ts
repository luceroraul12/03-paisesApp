import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "hola";
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void{
    this.hayError = false;
    if(this.termino == ""){
      return
    }
    this.paisService.buscarPorPais(this.termino).subscribe(
      respuesta => {
        console.log(respuesta);
      },
      error => {
        console.log(error);
        this.hayError = true;
      }
      );
    this.termino = "";
  }

}
