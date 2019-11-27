import { Component, OnInit } from '@angular/core';
import { Customer, Service } from './../../services/app.service';
import {formatDate} from '@angular/common';
import axios from 'axios';

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
  users: [];

  constructor(service: Service) {
    // this.customers = service.getCustomers();
  }

  ngOnInit() {
    this.fechaIni = new Date();
    this.fechaIni.setMonth(this.fechaIni.getMonth() -1);
    this.fechaFin = new Date();
    this.inUser = sessionStorage.getItem('user');

    this.getUsers();

    this.getIncidencias();
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
