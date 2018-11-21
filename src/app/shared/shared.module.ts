import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CrowdsaleQrCodeComponent } from './crowdsale-qr-code/crowdsale-qr-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, CrowdsaleQrCodeComponent],
  exports: [FooterComponent, CrowdsaleQrCodeComponent],
})
export class SharedModule { }
