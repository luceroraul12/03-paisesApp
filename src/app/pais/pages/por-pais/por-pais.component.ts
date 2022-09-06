import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "hola";

  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void{
    console.log(this.termino);
    this.termino = "";
    
  }

}
