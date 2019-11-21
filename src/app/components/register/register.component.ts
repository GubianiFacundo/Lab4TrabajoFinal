import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario = { nombre: '', clave: '', fechaFin: Date() };
  error = false;
  enviado = false;

  constructor(private authServer: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    axios.post('http://localhost:8000/api/register', {
      usuario: this.usuario.nombre,
      pass: this.usuario.clave,
      rol: 'SUP'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  }

  ingresar() {
    this.enviado = true;
    this.authServer.login(this.usuario.nombre, this.usuario.clave)
      .subscribe((u: Usuario) => {
        if (u === null) {
          console.log(u);
          this.error = true;
          this.enviado = false;
        } else {
          this.authServer.logged(u);
          this.enviado = false;
          if (this.authServer.redirectUrl) {
            this.router.navigate([this.authServer.redirectUrl]);
          } else {
            this.router.navigate(['/listaarticulos']);
          }
        }
      });
  }

}