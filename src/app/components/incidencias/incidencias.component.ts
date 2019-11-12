import { Component, OnInit, enableProdMode } from '@angular/core';
import { Customer, Service } from './../../services/app.service';

// if(!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css'],
  providers: [Service]
})
export class IncidenciasComponent implements OnInit {
  customers: Customer[];

    constructor(service: Service) {
        this.customers = service.getCustomers();
    }

  ngOnInit() {
  }

}
