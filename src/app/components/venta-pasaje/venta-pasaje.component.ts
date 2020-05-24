import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';


@Component({
  selector: 'app-venta-pasaje',
  templateUrl: './venta-pasaje.component.html',
  styleUrls: ['./venta-pasaje.component.css']
})
export class VentaPasajeComponent implements OnInit {
  venta: Pasaje;
  ventas: Array<Pasaje>;
  descuento: number=0;
  precioActual: number=0;
  mostrar: boolean=false;
  cantidadMenores:number=0;
  cantidadJubilados:number=0;
  cantidadAdultos:number=0;
  cantidadTotal: number=0;
  constructor(private ventaService: VentasService) {
    this.venta = new Pasaje();
    this.ventas = new Array<Pasaje>();
    this.listaVenta();
   }

  ngOnInit(): void {
  }
  public guardarVenta(){
    this.venta.fechaCompra= new Date();
    this.ventaService.guardarVenta(this.venta);
    this.venta= new Pasaje();
    this.mostrar=false;
    this.descuento=0;
    this.precioActual=0;
    this.cantidadTotal++;
  }
  public listaVenta(){
    this.ventas=this.ventaService.listaVenta();
  }
  public limpiarVenta(){
    this.venta= new Pasaje();
  }
  public calcularDescuento(){
    if(this.venta.categoriaPasajero=='m'){
      this.descuento=(this.venta.precio*25)/100;
      this.precioActual=this.venta.precio-((this.venta.precio*25)/100);
      this.mostrar=true;
      this.cantidadMenores++;
    }
    if(this.venta.categoriaPasajero=='j'){
      this.descuento=(this.venta.precio*50)/100;
      this.precioActual=this.venta.precio-this.descuento;
      this.mostrar=true;
      this.cantidadJubilados++;
    }
    if(this.venta.categoriaPasajero=='a'){
      this.cantidadAdultos++;
    }
  }

}