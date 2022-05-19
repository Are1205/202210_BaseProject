import { Component, Input,OnInit } from '@angular/core';
import { Banda } from '../Banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {
  bandaId!:string;
  @Input() bandaDetail!:Banda
  constructor(
    private bandaService: BandaService
  ) { }

  getBanda():void{
    this.bandaService.getBanda(this.bandaId).subscribe(banda=>{
      this.bandaDetail = banda;
    })

  }

  ngOnInit() {
  }

}
