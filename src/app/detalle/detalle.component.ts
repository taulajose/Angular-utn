import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any;
  loading=false;
  constructor(
    private productosSrv:ProductosService,
    private activateRoute:ActivatedRoute) { }

  async ngOnInit(){
    try{
      const id = this.activateRoute.snapshot.paramMap.get("id")
      this.producto = await this.productosSrv.getProducto(id)
      this.loading=true
    }catch(e){

    }
    
    
  }

}
