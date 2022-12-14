import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = 'Buscar por pais ...';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public termino: string = '';

  debouncer: Subject<string> = new Subject();

  constructor() {
    console.log('Constructor de input');
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300), tap(console.log))
      .subscribe((valor) => this.onDebounce.emit(valor));
  }

  buscar(): void {
    console.log(this.termino);
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
