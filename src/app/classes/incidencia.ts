export class Incidencia {
    id: String;
    titulo: String;
    desc: String;
    fechaIni: Date;
    importancia: ['LEVE', 'MEDIA', 'GRAVE', 'URGENTE'];
    estado: ['GENERADA', 'NOTIFICADA', 'VISTA', 'RESUELTA', 'ESCALADA'];
    nombreUser: String;

    constructor() {
      this.id = '';
      this.titulo = '';
      this.desc = '';
      this.fechaIni = new Date();
      this.importancia = ['LEVE', 'MEDIA', 'GRAVE', 'URGENTE'];
      this.estado = ['GENERADA', 'NOTIFICADA', 'VISTA', 'RESUELTA', 'ESCALADA'];
      this.nombreUser = '';
  }
}