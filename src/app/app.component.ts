import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrCodeComponent } from 'ng-qrcode';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QrCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FIC-QR';
}
