import { Injectable } from '@angular/core';
import { SwUpdate } from '../../../node_modules/@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  public promptEvent: any;

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if(window.confirm("Would you like to update?")) {
        window.location.reload();
      }
    });
    window.addEventListener('beforeinstallprompt', event => {
      console.log(`BeforeInstallPrompt Event: ${event}`);
      this.promptEvent = event;
    })
  }
}
