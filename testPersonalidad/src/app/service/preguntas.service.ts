import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Preguntas } from './Preguntas';
import { IPregunta } from './IPregunta';
import { IResultado } from './IResultado';
import { Resultados } from './Resultados';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor() { }

  getPreguntas(): Observable<IPregunta[]> {
    const preguntas = of(Preguntas);
    return preguntas;
  }

  getResultados(): Observable<IResultado[]> {
    const resultados = of(Resultados);
    return resultados;
  }
}
