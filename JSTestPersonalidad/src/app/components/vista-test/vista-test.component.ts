import { Component } from '@angular/core';
import { IPregunta } from 'src/app/service/IPregunta';
import { IResultado } from 'src/app/service/IResultado';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { VariablesService } from 'src/app/service/variables.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vista-test',
  templateUrl: './vista-test.component.html',
  styleUrls: ['./vista-test.component.css']
})
export class VistaTestComponent {

  constructor(private preguntasService: PreguntasService, private variablesService: VariablesService, private router: Router) { }

  preguntas: IPregunta[] | undefined
  resultados: IResultado[] | undefined

  resultado: IResultado[] = []

  ngOnInit() {
    this.getPreguntas()
    this.getResultados()
  }

  getPreguntas() {
    this.preguntasService.getPreguntas().subscribe(
      (p => this.preguntas = p)
    )
  }

  getResultados() {
    this.preguntasService.getResultados().subscribe(
      (r => this.resultados = r)
    )
  }

  obtenerResultado() {
    this.resultado = []
    if (!this.verificarSeleccion()) {
      const diccValores: { [tipo: string]: number } = this.obtenerCalificaciones();
      for (const tipo in diccValores) {
        if (this.resultados) {
          this.resultados.forEach((r: IResultado) => {
            if (r.tipo === tipo && r.puntos.includes(diccValores[tipo])) {
              this.resultado.push(r);
            }
          });
        }
      }
      this.variablesService.resultado = this.resultado;
      this.router.navigate(['/resultado']);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Falta seleccionar opciones !",
      });
    }
  }

  obtenerCalificaciones(){
    const sumasPorTipo: { [tipo: string]: number } = {};
    if (this.preguntas){
      this.preguntas.forEach((p: IPregunta) => {
        const tipo = p.tipo;
        const nota = parseInt(p.nota);
        if (tipo && !isNaN(nota)) {
          sumasPorTipo[tipo] = (sumasPorTipo[tipo] || 0) + nota;
        }
      })
    }
    return sumasPorTipo
  }

  verificarSeleccion() {    
    let faltaSeleccionar = false;
    if (this.preguntas != undefined) {
      this.preguntas.forEach((p: IPregunta) => {     
        if (p.nota == "") {
          faltaSeleccionar = true;
        }
      })
    }
    return faltaSeleccionar;
  }
}
