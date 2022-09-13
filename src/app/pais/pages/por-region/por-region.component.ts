import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  public regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  public regionActiva: string = '';
  public paisesEncontrados: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  seleccionarRegion(region: string) {
    this.regionActiva = region;
    this.paisService
      .buscarPorRegion(region)
      .subscribe((rta) => (this.paisesEncontrados = rta));
  }

  aplicarCSS(region: string) {
    return this.regionActiva == region
      ? 'btn btn-primary'
      : 'btn btn-outline-danger';
  }
}
