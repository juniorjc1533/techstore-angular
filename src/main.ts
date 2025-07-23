import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-header />
      <main class="main-content">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }
  `]
})
export class App {
  name = 'TechStore';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});