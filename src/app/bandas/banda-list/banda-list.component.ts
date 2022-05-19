import { Component, OnInit } from '@angular/core';
import { Banda } from '../Banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  selectedBanda!:Banda;
  selected: Boolean = false;
  bandas: Array<Banda> = [];
  constructor(private bandaService:BandaService) { }

  getBandas():void{
    this.bandaService.getBandas().subscribe(bandas => {
      this.bandas = bandas;
    })
  }

  onSelectedBanda(banda:Banda):void{
    this.selected =true;
    this.selectedBanda = banda;
  }

  getPromedioMiemebros(): string{
    let suma: number=0;
    let contador: number = 0;
    let promedio:number = 0;
    for(let i= 0; i < this.bandas.length; i ++)
    {
      contador = i +1;
      suma += this.bandas[i].numberOfMembers;
    }
    promedio = suma/contador;
    return 'Average Number Of Memebers (Rounded up) ' + promedio.toPrecision(0);
  }

  ngOnInit() {
    this.getBandas();
  }

}
