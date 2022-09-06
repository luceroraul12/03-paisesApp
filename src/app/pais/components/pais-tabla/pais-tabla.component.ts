import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interface/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paisesEncontrados: Pais[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
