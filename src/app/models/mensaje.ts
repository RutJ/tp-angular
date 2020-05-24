export class Mensaje {
    para:number;
    de:number;
    texto:string;
    fechaEnvio:Date;

    Mensaje(para?: number, de?:number, texto?:string,fechaEnvio?:Date){
        this.para=para;
        this.de=de;
        this.texto=texto;
        this.fechaEnvio=fechaEnvio;
    }
}
