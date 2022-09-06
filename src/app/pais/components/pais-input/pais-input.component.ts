import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public termino: string = '';

  debouncer: Subject<string> = new Subject();

  constructor() {
    console.log('Constructor de input');
  }

  ngOnInit(): void {
    this.debouncer.subscribe((valor) => console.log('debouncer: ', valor));
  }

  buscar(): void {
    console.log(this.termino);
    this.onEnter.emit(this.termino);
    this.termino = '';
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
