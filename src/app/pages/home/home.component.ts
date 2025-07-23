import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  productsCount: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              Tecnologia que <span class="highlight">transforma</span> seu dia
            </h1>
            <p class="hero-description">
              Descubra os melhores produtos tecnológicos com preços incríveis e entrega rápida.
              Sua experiência digital começa aqui.
            </p>
            <div class="hero-actions">
              <button class="cta-button primary" routerLink="/produtos">
                Ver Produtos
              </button>
              <button class="cta-button secondary">
                Saiba Mais
              </button>
            </div>
          </div>
          <div class="hero-image">
            <div class="floating-card">
              <span class="card-icon">📱</span>
              <span class="card-text">Smartphones</span>
            </div>
            <div class="floating-card delay-1">
              <span class="card-icon">💻</span>
              <span class="card-text">Notebooks</span>
            </div>
            <div class="floating-card delay-2">
              <span class="card-icon">🎧</span>
              <span class="card-text">Acessórios</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="categories">
        <div class="container">
          <h2 class="section-title">Categorias em Destaque</h2>
          <div class="categories-grid">
            <div class="category-card" *ngFor="let category of categories">
              <div class="category-icon">{{ category.icon }}</div>
              <h3 class="category-name">{{ category.name }}</h3>
              <p class="category-count">{{ category.productsCount }} produtos</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="featured-products">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Produtos em Destaque</h2>
            <a routerLink="/produtos" class="view-all">Ver todos →</a>
          </div>
          
          <div class="products-grid">
            <div class="product-card" *ngFor="let product of featuredProducts">
              <div class="product-image">
                <img [src]="product.image" [alt]="product.name" />
                <div class="product-badge" *ngIf="product.badge">{{ product.badge }}</div>
                <div class="product-actions">
                  <button class="action-btn wishlist" aria-label="Adicionar aos favoritos">♡</button>
                  <button class="action-btn quick-view" aria-label="Visualização rápida">👁</button>
                </div>
              </div>
              
              <div class="product-info">
                <h3 class="product-name">{{ product.name }}</h3>
                
                <div class="product-rating">
                  <div class="stars">
                    <span *ngFor="let star of getStars(product.rating)" class="star filled">⭐</span>
                  </div>
                  <span class="reviews-count">({{ product.reviews }})</span>
                </div>
                
                <div class="product-pricing">
                  <span class="current-price">R$ {{ product.price | number:'1.2-2' }}</span>
                  <span class="original-price" *ngIf="product.originalPrice">
                    R$ {{ product.originalPrice | number:'1.2-2' }}
                  </span>
                </div>
                
                <button class="add-to-cart-btn">
                  <span class="cart-icon">🛒</span>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="newsletter">
        <div class="container">
          <div class="newsletter-content">
            <h2 class="newsletter-title">Fique por dentro das novidades</h2>
            <p class="newsletter-description">
              Receba ofertas exclusivas e lançamentos em primeira mão
            </p>
            <div class="newsletter-form">
              <input type="email" placeholder="Seu melhor e-mail" class="email-input" />
              <button class="subscribe-btn">Inscrever-se</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      min-height: calc(100vh - 200px);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
      position: relative;
      overflow: hidden;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .highlight {
      color: #fbbf24;
    }

    .hero-description {
      font-size: 1.1rem;
      opacity: 0.9;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
    }

    .cta-button {
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .cta-button.primary {
      background: #fbbf24;
      color: #1f2937;
    }

    .cta-button.primary:hover {
      background: #f59e0b;
      transform: translateY(-2px);
    }

    .cta-button.secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .cta-button.secondary:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .hero-image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .floating-card {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 1rem 1.5rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: float 3s ease-in-out infinite;
    }

    .floating-card.delay-1 {
      animation-delay: 1s;
      top: 20%;
      right: 20%;
    }

    .floating-card.delay-2 {
      animation-delay: 2s;
      bottom: 20%;
      left: 10%;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    /* Categories Section */
    .categories {
      padding: 4rem 0;
      background: #f8fafc;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 3rem;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .category-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .category-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .category-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .category-name {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .category-count {
      color: #6b7280;
      font-size: 0.9rem;
    }

    /* Featured Products Section */
    .featured-products {
      padding: 4rem 0;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
    }

    .view-all {
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .view-all:hover {
      color: #1d4ed8;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .product-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: #ef4444;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .product-actions {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .product-card:hover .product-actions {
      opacity: 1;
    }

    .action-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .action-btn:hover {
      background: white;
      transform: scale(1.1);
    }

    .product-info {
      padding: 1.5rem;
    }

    .product-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.75rem;
      line-height: 1.4;
    }

    .product-rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .stars {
      display: flex;
      gap: 0.1rem;
    }

    .star {
      font-size: 0.9rem;
    }

    .reviews-count {
      color: #6b7280;
      font-size: 0.9rem;
    }

    .product-pricing {
      margin-bottom: 1.5rem;
    }

    .current-price {
      font-size: 1.3rem;
      font-weight: 700;
      color: #059669;
    }

    .original-price {
      font-size: 1rem;
      color: #9ca3af;
      text-decoration: line-through;
      margin-left: 0.5rem;
    }

    .add-to-cart-btn {
      width: 100%;
      background: #2563eb;
      color: white;
      border: none;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .add-to-cart-btn:hover {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    /* Newsletter Section */
    .newsletter {
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      color: white;
      padding: 4rem 0;
    }

    .newsletter-content {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .newsletter-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .newsletter-description {
      font-size: 1.1rem;
      opacity: 0.9;
      margin-bottom: 2rem;
    }

    .newsletter-form {
      display: flex;
      gap: 1rem;
      max-width: 400px;
      margin: 0 auto;
    }

    .email-input {
      flex: 1;
      padding: 1rem;
      border: none;  
      border-radius: 8px;
      font-size: 1rem;
    }

    .subscribe-btn {
      background: #fbbf24;
      color: #1f2937;
      border: none;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .subscribe-btn:hover {
      background: #f59e0b;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }

      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .cta-button {
        padding: 0.8rem 1.5rem;
      }
    }
  `]
})
export class HomeComponent {
  categories: Category[] = [
    { id: 1, name: 'Smartphones', icon: '📱', productsCount: 150 },
    { id: 2, name: 'Notebooks', icon: '💻', productsCount: 89 },
    { id: 3, name: 'Tablets', icon: '📟', productsCount: 45 },
    { id: 4, name: 'Acessórios', icon: '🎧', productsCount: 200 },
    { id: 5, name: 'Games', icon: '🎮', productsCount: 120 },
    { id: 6, name: 'Smart TV', icon: '📺', productsCount: 67 }
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 8999.99,
      originalPrice: 9999.99,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 1234,
      badge: '-10%'
    },
    {
      id: 2,
      name: 'MacBook Air M2 13" 512GB',
      price: 12499.99,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 856
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 7299.99,
      originalPrice: 7999.99,
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      reviews: 642,
      badge: 'Novo'
    },
    {
      id: 4,
      name: 'AirPods Pro 2ª Geração',
      price: 1899.99,
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 1567
    }
  ];

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}