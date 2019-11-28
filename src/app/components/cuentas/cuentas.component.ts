import { Component, OnInit } from '@angular/core';
import { Customer } from './../../services/app.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
  customers: [];
  constructor() { }

  ngOnInit() {
  }

  goToIncidenciasCuenta(e) {
    sessionStorage.setItem('cuenta', e.row.data.nombre)
    window.location.replace('http://localhost:4200/incidencias');
  }

  getCuentas(tipo) {
    axios.get('http://localhost:8000/api/usuarios', {
      params: {
        tipo: tipo,
      },
    }).then(resp => {
      console.log(resp)
      this.customers = resp.data;
    }).catch(err => {
      console.log(err)
    });
  }

}
