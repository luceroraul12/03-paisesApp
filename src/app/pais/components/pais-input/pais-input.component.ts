import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  public termino: string = "";

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void{
    console.log(this.termino);
    this.onEnter.emit(this.termino);
    this.termino = "";
  }

}
