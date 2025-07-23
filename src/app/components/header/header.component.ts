import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-logo">
            <a routerLink="/" class="logo-link">
              <span class="logo-icon">🛒</span>
              <span class="logo-text">TechStore</span>
            </a>
          </div>
          
          <ul class="nav-menu" [class.active]="isMenuOpen">
            <li class="nav-item">
              <a routerLink="/" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Início</a>
            </li>
            <li class="nav-item">
              <a routerLink="/produtos" class="nav-link" routerLinkActive="active">Produtos</a>
            </li>
            <li class="nav-item">
              <a routerLink="/categorias" class="nav-link" routerLinkActive="active">Categorias</a>
            </li>
            <li class="nav-item">
              <a routerLink="/contato" class="nav-link" routerLinkActive="active">Contato</a>
            </li>
          </ul>

          <div class="nav-actions">
            <button class="search-btn" aria-label="Buscar">
              <span class="search-icon">🔍</span>
            </button>
            <button class="cart-btn" aria-label="Carrinho">
              <span class="cart-icon">🛒</span>
              <span class="cart-count">3</span>
            </button>
            <a routerLink="/login" class="login-btn">Entrar</a>
          </div>

          <div class="hamburger" [class.active]="isMenuOpen" (click)="toggleMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      box-shadow: 0 4px 20px rgba(37, 99, 235, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar {
      padding: 0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 1.5rem;
      transition: transform 0.3s ease;
    }

    .nav-logo .logo-link:hover {
      transform: scale(1.05);
    }

    .logo-icon {
      margin-right: 0.5rem;
      font-size: 1.8rem;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-link {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-link:hover,
    .nav-link.active {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .search-btn,
    .cart-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 6px;
      transition: background 0.3s ease;
    }

    .search-btn:hover,
    .cart-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .cart-btn {
      position: relative;
    }

    .cart-count {
      position: absolute;
      top: -5px;
      right: -5px;
      background: #ef4444;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .login-btn {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .login-btn:hover {
      background: white;
      color: #2563eb;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      padding: 0.5rem;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: white;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 3px;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }

      .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: #1d4ed8;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
        gap: 0;
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-item {
        margin: 1rem 0;
      }

      .hamburger {
        display: flex;
      }

      .hamburger.active .bar:nth-child(2) {
        opacity: 0;
      }

      .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }

      .nav-actions {
        gap: 0.5rem;
      }

      .login-btn {
        padding: 0.4rem 1rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}