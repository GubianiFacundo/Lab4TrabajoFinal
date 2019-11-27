export class Notificacion {
    fechaNotif: Date;
    aQuien: String;
    medio: ['MAIL', 'SMS', 'TELEFONO'];

    constructor() {
      this.fechaNotif = new Date();
      this.aQuien = '';
      this.medio = ['MAIL', 'SMS', 'TELEFONO'];
  }
}