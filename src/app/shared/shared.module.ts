import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CrowdsaleQrCodeComponent } from './crowdsale-qr-code/crowdsale-qr-code.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FooterComponent, CrowdsaleQrCodeComponent],
  exports: [FooterComponent, CrowdsaleQrCodeComponent],
})
export class SharedModule { }
