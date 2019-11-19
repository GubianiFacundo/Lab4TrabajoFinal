export class Escalamiento {
    nombre: String;
    fecha: Date = new Date();
    estado: ['GENERADA', 'NOTIFICADA', 'VISTA', 'RESUELTA', 'ESCALADA'];
}