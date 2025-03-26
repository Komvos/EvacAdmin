import { Component, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements AfterViewInit {
  constructor() {}

  async ngAfterViewInit() {
    await Browser.open({
      url: 'https://www.komvos.gr/evac/admin/', // Replace with your desired URL
      toolbarColor: '#ffffff',
      presentationStyle: 'popover',   // iOS-specific
    });
  }
}
