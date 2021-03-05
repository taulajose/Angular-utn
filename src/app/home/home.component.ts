import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:any = []
 
  constructor(private productosSrv:ProductosService) { 

  }

  async ngOnInit(){
    try{
      this.productos = await this.productosSrv.getProductos().toPromise();
    }catch(e){
      console.log("Error",e)
    }
  }

}
