import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Incidencia } from 'src/app/classes/incidencia';

@Component({
  selector: 'app-incidencia-edit',
  templateUrl: './incidencia-edit.component.html',
  styleUrls: ['./incidencia-edit.component.css']
})
export class IncidenciaEditComponent implements OnInit {

  incidencia = new Incidencia();

  notificacion = ['MAIL', 'SMS', 'TELEFONO'];
  acciones = ['NADA', 'RECONOCIDA', 'SOLUCIONADA'];
  inImp: String;
  inEst: String;
  inUser: String;
  inNotif: String;
  inAcc: String;
  incidenciaEdit: {
    id: '';
    titulo: '',
    descripcion: '',
    importancia: '',
    nombre_user: '',
  };
  users: [];

  constructor() {
  }

  ngOnInit() {
    this.getUsers();
    this.inNotif = 'MAIL';
    this.inAcc = 'NADA';
    this.incidenciaEdit = JSON.parse(sessionStorage.getItem('incidencia'))
    this.incidencia.titulo = this.incidenciaEdit.titulo;
    this.incidencia.desc = this.incidenciaEdit.descripcion;
    this.inImp = this.incidenciaEdit.importancia;
    this.inUser = this.incidenciaEdit.nombre_user;
  }

  editarIncidencia() {
    if (this.inAcc == 'NADA') {
      this.inEst = 'NOTIFICADA'
    }
    else if (this.inAcc == 'RECONOCIDA') {
      this.inEst = 'VISTA'
    }
    else if (this.inAcc == 'SOLUCIONADA') {
      this.inEst = 'RESUELTA'
    }

    if (this.inUser != this.incidenciaEdit.nombre_user) {
      axios.post('http://localhost:8000/api/generarEscalamiento', {
        id_incidencia: this.incidenciaEdit.id,
        a_quien: this.inUser,
        estado: this.inEst
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });

      this.inEst = 'ESCALADA'
    }

    if (this.inAcc != 'NADA') {
      axios.post('http://localhost:8000/api/generarAccion', {
        id_incidencia: this.incidenciaEdit.id,
        tipo_accion: this.inAcc,
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
    }

    axios.put('http://localhost:8000/api/modificarIncidencia/' + this.incidenciaEdit.id, {
      titulo: this.incidencia.titulo,
      desc: this.incidencia.desc,
      importancia: this.inImp,
      estado: this.inEst,
      nombre_user: this.inUser,
    }).then(res => {
      // NOTIFICA 
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  async getUsers() {
    await axios.get('http://localhost:8000/api/usuariosAsignar').then(res => {
      this.users = res.data.map(x => x.nombre)
      // console.log(res.data.map(x => x.nombre))
    }).catch(err => {
      console.log(err)
    });
  }

}
