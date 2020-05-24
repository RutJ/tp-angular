export class Asistente {
    usuario: string;
    nombreOrganizacion: string;
    requiereConstancia: boolean;
    fecha:Date;
    
    Asistente(usuario?: string, nombreOrganizacion?:string,requiereConstancia?:boolean, fecha?:Date){
        this.usuario= usuario;
        this.nombreOrganizacion= nombreOrganizacion;
        this.requiereConstancia= requiereConstancia;
        this.fecha=fecha;
    }

}
