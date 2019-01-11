import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CrowdsaleQrCodeComponent } from './crowdsale-qr-code/crowdsale-qr-code.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { EnsAddressesComponent } from './ens-addresses/ens-addresses.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    CrowdsaleQrCodeComponent,
    MenuComponent,
    EnsAddressesComponent
  ],
  exports: [
    FooterComponent,
    CrowdsaleQrCodeComponent,
    MenuComponent,
    EnsAddressesComponent
  ],
})
export class SharedModule { }
