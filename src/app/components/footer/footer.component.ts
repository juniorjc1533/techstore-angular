import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">TechStore</h3>
            <p class="footer-description">
              Sua loja online de tecnologia com os melhores produtos e preços do mercado.
              Qualidade garantida e entrega rápida para todo o Brasil.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">📘</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
              <a href="#" class="social-link" aria-label="Twitter">🐦</a>
              <a href="#" class="social-link" aria-label="YouTube">📺</a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Produtos</h4>
            <ul class="footer-links">
              <li><a routerLink="/produtos/smartphones">Smartphones</a></li>
              <li><a routerLink="/produtos/notebooks">Notebooks</a></li>
              <li><a routerLink="/produtos/tablets">Tablets</a></li>
              <li><a routerLink="/produtos/acessorios">Acessórios</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Atendimento</h4>
            <ul class="footer-links">
              <li><a routerLink="/ajuda">Central de Ajuda</a></li>
              <li><a routerLink="/contato">Fale Conosco</a></li>
              <li><a routerLink="/trocas">Trocas e Devoluções</a></li>
              <li><a routerLink="/garantia">Garantia</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Conta</h4>
            <ul class="footer-links">
              <li><a routerLink="/login">Minha Conta</a></li>
              <li><a routerLink="/pedidos">Meus Pedidos</a></li>
              <li><a routerLink="/wishlist">Lista de Desejos</a></li>
              <li><a routerLink="/newsletter">Newsletter</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Contato</h4>
            <div class="contact-info">
              <p>📞 (11) 1234-5678</p>
              <p>✉️ contato&#64;techstore.com</p>
              <p>📍 São Paulo, SP - Brasil</p>
              <p>🕒 Seg-Sex: 9h às 18h</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2025 TechStore. Todos os direitos reservados.</p>
            <div class="footer-bottom-links">
              <a routerLink="/privacidade">Política de Privacidade</a>
              <a routerLink="/termos">Termos de Uso</a>
              <a routerLink="/cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      color: #e5e7eb;
      margin-top: auto;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem 0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-title {
      color: #60a5fa;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .section-title {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .footer-description {
      color: #9ca3af;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(96, 165, 250, 0.1);
      border-radius: 8px;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #60a5fa;
      transform: translateY(-2px);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #60a5fa;
    }

    .contact-info p {
      color: #9ca3af;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .footer-bottom {
      border-top: 1px solid #374151;
      padding: 1.5rem 0;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;
    }

    .footer-bottom-links a {
      color: #9ca3af;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #60a5fa;
    }

    @media (max-width: 768px) {
      .footer-container {
        padding: 2rem 1rem 0;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent { }

export { FooterComponent }