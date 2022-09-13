import { Component, OnInit, EventEmitter } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paisesEncontrados: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  haySugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.haySugerencias = false;
    this.hayError = false;
    this.termino = termino;
    if (this.termino == '') {
      return;
    }
    this.paisService.buscarPorPais(this.termino).subscribe(
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
    this.haySugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorPais(termino).subscribe(
      (paises) => {
        this.paisesSugeridos = paises.splice(0, 5);
      },
      (error) => (this.paisesSugeridos = [])
    );
  }

  rellenar(pais: Pais): void {}

  clickearMiSugerido(termino: string): void {
    this.buscar(termino);
  }
}
