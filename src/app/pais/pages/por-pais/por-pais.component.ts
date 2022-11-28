import { Component, OnInit, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { SPAPaises } from '../../interfaces/search-response.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  paises: SPAPaises[]=[];
  constructor(private PaisServices_: PaisService ) { }

  ngOnInit(): void {
  }

  get results ():SPAPaises[]{
    return this.PaisServices_.paises
  }

  busqueda():void{
    this.PaisServices_.buscarPais(this.nuevo)
    .subscribe({
      next: (resp) =>{
          this.PaisServices_.paises = resp;
      },
      error: (err) =>{

      }
  })
  }
  nuevo:string =""
 
}

