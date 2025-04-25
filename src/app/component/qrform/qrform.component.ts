import { Component } from '@angular/core';
import { QrCodeComponent } from 'ng-qrcode';

@Component({
  selector: 'app-qrform',
  imports: [QrCodeComponent],
  templateUrl: './qrform.component.html',
  styleUrl: './qrform.component.css'
})
export class QrformComponent {

}



/*
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import QRCode from 'qrcode';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  imports:[ReactiveFormsModule, NgIf],
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent {
  form: FormGroup;
  qrDataUrl: string = '';

   constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tipo: ['url'],
      url: [''],
      ssid: [''],
      password: [''],
      seguridad: ['WPA']
    });
  }

  async generarQR(): Promise<void> {
    //if (this.form.invalid) {
    //  console.error('Formulario inválido');
    //  return;
    //}
    const { tipo, url, ssid, password, seguridad } = this.form.value;

    let contenido = '';
    if (tipo === 'url') {
      contenido = url;
    } else {
      contenido = `WIFI:T:${seguridad};S:${ssid};P:${password};;`;
    }

    try {
      console.log("generando QR")
      this.qrDataUrl = await QRCode.toDataURL(contenido);
      
      const link = document.createElement('a');
      link.href = this.qrDataUrl;
      link.download = 'qr.png';
      //link.click();
      
    } catch (err) {
      console.error('Error generando QR:', err);
    }
  }
}

*/