export class Palabra {
    categoria: number;
    palabraIngles:string;
    palabraEspaniol:string;
    urlImagen:string;

    constructor(categoria?:number,palabraIngles?:string,palabraEspaniol?:string,urlImagen?:string){
        this.categoria=categoria;
        this.palabraIngles= palabraIngles;
        this.palabraEspaniol=palabraEspaniol;
        this.urlImagen=urlImagen;
    }
}
