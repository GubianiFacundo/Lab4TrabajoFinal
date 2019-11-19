export class Incidencia {
    id: String;
    titulo: String;
    desc: String;
    fechaIni: Date = new Date();
    importancia: ['LEVE', 'MEDIA', 'GRAVE', 'URGENTE'];
    estado: ['GENERADA', 'NOTIFICADA', 'VISTA', 'RESUELTA', 'ESCALADA'];
    evento: [];
}