import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  pais!: Pais;

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.paisService.buscarPorCodigoAlpha(id)))
      .subscribe((respuesta) => (this.pais = respuesta));
  }
}
