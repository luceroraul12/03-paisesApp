import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interface/pais.interface';
import { PaisService } from '../../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paisesEncontrados: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    if (this.termino == '') {
      return;
    }
    this.paisService.buscarPorCapital(this.termino).subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.paisesEncontrados = respuesta;
        this.hayError = !respuesta;
      },
      (error) => {
        console.log(error);
        this.hayError = true;
      }
    );
    this.termino = '';
  }

  obtenerSugerencia(termino: string) {
    this.hayError = false;
  }
}
