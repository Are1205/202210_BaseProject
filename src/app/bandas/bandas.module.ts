import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasComponent } from './bandas.component';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';
import { BandaListComponent } from './banda-list/banda-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandaListComponent, BandaDetailComponent],
  exports:[BandaListComponent]

})
export class BandasModule { }
