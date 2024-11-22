import { Component } from '@angular/core';

@Component({
  selector: 'app-app-shell',
  template: `preloader <img class="loading-indicator" src="loading.gif" /> `,
  styles: [
    `
      .loading-indicator {
        height: 300px;
        margin: 0 auto;
      }
    `,
  ],
})
export class AppShellComponent {}
