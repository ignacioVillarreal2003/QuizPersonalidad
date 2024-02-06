import { Injectable } from '@angular/core';
import { IResultado } from './IResultado';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  constructor() { }

  resultado: IResultado[] = []
}
