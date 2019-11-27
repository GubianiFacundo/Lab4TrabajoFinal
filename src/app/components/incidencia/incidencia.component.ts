import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../../classes/incidencia';
import axios from 'axios';
// import { Notificacion } from '../../classes/notificacion';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css']
})
export class IncidenciaComponent implements OnInit {

  incidencia = new Incidencia();
  // notificacion = new Notificacion(); // porcua no quieres andar riquiAngular weh :¿?
  notificacion = ['MAIL', 'SMS', 'TELEFONO'];
  inImp: String;
  inEst: '';
  inUser: String;
  inNotif: String;
  users: [];

  constructor() {

  }


  ngOnInit() {
    this.getUsers();
    this.inUser = sessionStorage.getItem('user');
    this.inImp = 'LEVE';
    this.inNotif = 'MAIL';

  }

  async generarIncidencia() {
    var self = this;
    await axios.post('http://localhost:8000/api/generarIncidencia', {
      titulo: this.incidencia.titulo,
      descripcion: this.incidencia.desc,
      importancia: this.inImp,
      nombre_user: this.inUser,
      medio: this.inNotif,
    }).then(async res => {
      await axios.put('http://localhost:8000/api/modificarIncidencia/' + res.data.id, {
        titulo: self.incidencia.titulo,
        descripcion: self.incidencia.desc,
        importancia: self.inImp,
        estado: 'NOTIFICADA',
        nombre_user: self.inUser,
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  };

  async getUsers() {
    await axios.get('http://localhost:8000/api/usuariosAsignar').then(res => {
      this.users = res.data.map(x => x.nombre)
      // console.log(res.data.map(x => x.nombre))
    }).catch(err => {
      console.log(err)
    });
  }
}
