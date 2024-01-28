import { Component } from '@angular/core';
import { IResultado } from 'src/app/service/IResultado';
import { VariablesService } from 'src/app/service/variables.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resultado-test',
  templateUrl: './resultado-test.component.html',
  styleUrls: ['./resultado-test.component.css']
})
export class ResultadoTestComponent implements AfterViewInit {

  constructor(private variablesService: VariablesService){}

  resultados: IResultado[] | undefined = undefined

  ngOnInit(){
    this.resultados = this.variablesService.resultado
  }

  ngAfterViewInit() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
}
