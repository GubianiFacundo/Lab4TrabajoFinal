import { Component, OnInit } from '@angular/core';
import { Customer, Service } from './../../services/app.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import axios from 'axios';
import { Incidencia } from 'src/app/classes/incidencia';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css'],
  providers: [Service]
})
export class IncidenciasComponent implements OnInit {
  customers: Customer[];
  inUser: String;
  fechaIni: Date;
  fechaFin: Date;
  idInci: '';
  nombreUser: '';
  cuenta: String;
  inci: {};
  users: [];
  // columns: [
  //   {
  //     caption: 'Id',
  //     dataField: 'id'
  //   },
  //   {
  //     caption: 'Titulo',
  //     dataField: 'titulo'
  //   },
  //   {
  //     caption: 'Descripción',
  //     dataField: 'descripción'
  //   },
  //   {
  //     caption: 'Fecha',
  //     dataField: 'fecha'
  //   },
  //   {
  //     caption: 'Importancia',
  //     dataField: 'importancia'
  //   },
  //   {
  //     caption: 'Estado',
  //     dataField: 'estado'
  //   },
  //   {
  //     caption: 'Usuario Asignado',
  //     dataField: 'nombre_user'
  //   },
  //   {
  //     caption: 'Edtiar Incidencia',
  //     type: 'buttons',
  //     buttons: [{
  //       name: 'goToEdit',
  //       hint: 'Editar Incidencia',
  //       icon: 'fas fa-pen',
  //       text: 'Editar Incidencia',
  //       onClick: e => {
  //       }
  //     }]
  //   }];

  constructor(private service: Service) {
    // this.customers = service.getCustomers();
  }

  ngOnInit() {
    this.getUsers();
    this.cuenta = sessionStorage.getItem('cuenta');

    if (this.cuenta != null && this.cuenta != undefined && this.cuenta != '') {
      console.log('adsfadsf')
      this.inUser = this.cuenta;
      this.cuenta = null;
    } else {
      console.log('adsfadsfasdfadsfadsf')
      this.inUser = sessionStorage.getItem('user');
    }

    this.fechaIni = new Date();
    this.fechaIni.setMonth(this.fechaIni.getMonth() - 1);
    this.fechaFin = new Date();

    this.getIncidencias();
    sessionStorage.removeItem('cuenta');
  }

  click(e) {
    sessionStorage.setItem('incidencia', JSON.stringify(e.row.data));
    this.inci = e.row.data;
    this.idInci = e.row.data.id;
    this.nombreUser = e.row.data.nombre_user;
    window.location.replace('http://localhost:4200/incidenciaEdit');
  }

  getIncidencias() {
    axios.get('http://localhost:8000/api/listaIncidencia', {
      params: {
        nombre_user: this.inUser,
        fechaIni: this.fechaIni,
        fechaFin: this.fechaFin
      },
    }).then(resp => {
      console.log(resp)
      this.customers = resp.data.content;
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
