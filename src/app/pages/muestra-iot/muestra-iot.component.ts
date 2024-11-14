import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-muestra-iot',
  templateUrl: './muestra-iot.component.html',
  styleUrls: ['./muestra-iot.component.scss'],
})
export class MuestraIotComponent  implements OnInit {

  mediciones: Mediciones[] = [];


  constructor(public basedatos: AngularFireDatabase) {
    this.leerMediciones();
   }

  ngOnInit() {}

  leerMediciones() {

    const path = '/listaejemplo';
    this.basedatos.list<Mediciones>(path).valueChanges().subscribe( res => {
      console.log("mediciones -> ", res);
      this.mediciones = res;
      this.mediciones.reverse();
    })
  }

}

interface Mediciones {
  valor: number;
  fecha: number;
}