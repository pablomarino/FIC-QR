import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrformComponent } from './component/qrform/qrform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QrformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FIC-QR';
}
