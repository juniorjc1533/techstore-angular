import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="login-container">
      <div class="login-wrapper">
        <div class="login-form-section">
          <div class="form-container">
            <div class="form-header">
              <h1 class="form-title">Bem-vindo de volta!</h1>
              <p class="form-subtitle">Entre em sua conta para continuar suas compras</p>
            </div>

            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
              <div class="form-group">
                <label for="email" class="form-label">E-mail</label>
                <div class="input-wrapper">
                  <span class="input-icon">✉️</span>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    class="form-input"
                    [class.error]="isFieldInvalid('email')"
                    placeholder="seu@email.com"
                  />
                </div>
                <div class="error-message" *ngIf="isFieldInvalid('email')">
                  <span *ngIf="loginForm.get('email')?.errors?.['required']">E-mail é obrigatório</span>
                  <span *ngIf="loginForm.get('email')?.errors?.['email']">E-mail inválido</span>
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="form-label">Senha</label>
                <div class="input-wrapper">
                  <span class="input-icon">🔒</span>
                  <input
                    [type]="showPassword ? 'text' : 'password'"
                    id="password"
                    formControlName="password"
                    class="form-input"
                    [class.error]="isFieldInvalid('password')"
                    placeholder="Sua senha"
                  />
                  <button
                    type="button"
                    class="password-toggle"
                    (click)="togglePassword()"
                    aria-label="Mostrar/ocultar senha"
                  >
                    {{ showPassword ? '🙈' : '👁️' }}
                  </button>
                </div>
                <div class="error-message" *ngIf="isFieldInvalid('password')">
                  <span *ngIf="loginForm.get('password')?.errors?.['required']">Senha é obrigatória</span>
                  <span *ngIf="loginForm.get('password')?.errors?.['minlength']">Senha deve ter pelo menos 6 caracteres</span>
                </div>
              </div>

              <div class="form-options">
                <label class="checkbox-container">
                  <input type="checkbox" formControlName="rememberMe" />
                  <span class="checkmark"></span>
                  Lembrar de mim
                </label>
                <a routerLink="/recuperar-senha" class="forgot-password">Esqueci minha senha</a>
              </div>

              <button
                type="submit"
                class="submit-btn"
                [disabled]="loginForm.invalid || isLoading"
                [class.loading]="isLoading"
              >
                <span *ngIf="!isLoading">Entrar</span>
                <span *ngIf="isLoading" class="loading-text">
                  <span class="spinner"></span>
                  Entrando...
                </span>
              </button>
            </form>

            <div class="form-divider">
              <span>ou</span>
            </div>

            <div class="social-login">
              <button class="social-btn google">
                <span class="social-icon">🌐</span>
                Continuar com Google
              </button>
              <button class="social-btn facebook">
                <span class="social-icon">📘</span>
                Continuar com Facebook
              </button>
            </div>

            <div class="form-footer">
              <p>Não tem uma conta? <a routerLink="/cadastro" class="signup-link">Cadastre-se</a></p>
            </div>
          </div>
        </div>

        <div class="login-image-section">
          <div class="image-content">
            <h2 class="image-title">Sua tecnologia favorita</h2>
            <p class="image-description">
              Descubra os melhores produtos com preços incríveis e entrega rápida.
            </p>
            <div class="feature-list">
              <div class="feature-item">
                <span class="feature-icon">✅</span>
                <span>Entrega grátis acima de R$ 199</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔒</span>
                <span>Compra 100% segura</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">↩️</span>
                <span>7 dias para troca e devolução</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem 1rem;
    }

    .login-wrapper {
      background: white;
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 1000px;
      width: 100%;
      min-height: 600px;
    }

    .login-form-section {
      padding: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .form-container {
      width: 100%;
      max-width: 400px;
    }

    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .form-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .form-subtitle {
      color: #6b7280;
      font-size: 1rem;
    }

    .login-form {
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-icon {
      position: absolute;
      left: 1rem;
      z-index: 1;
      font-size: 1rem;
    }

    .form-input {
      width: 100%;
      padding: 1rem 1rem 1rem 3rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-input.error {
      border-color: #ef4444;
    }

    .password-toggle {
      position: absolute;
      right: 1rem;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.25rem;
    }

    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 0.9rem;
      color: #374151;
    }

    .checkbox-container input {
      margin-right: 0.5rem;
    }

    .forgot-password {
      color: #3b82f6;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .forgot-password:hover {
      text-decoration: underline;
    }

    .submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .form-divider {
      text-align: center;
      margin: 2rem 0;
      position: relative;
      color: #9ca3af;
    }

    .form-divider::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background: #e5e7eb;
    }

    .form-divider span {
      background: white;
      padding: 0 1rem;
    }

    .social-login {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .social-btn:hover {
      border-color: #d1d5db;
      background: #f9fafb;
    }

    .social-icon {
      font-size: 1.2rem;
    }

    .form-footer {
      text-align: center;
      color: #6b7280;
    }

    .signup-link {
      color: #3b82f6;
      text-decoration: none;
      font-weight: 600;
    }

    .signup-link:hover {
      text-decoration: underline;
    }

    .login-image-section {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      color: white;
    }

    .image-content {
      text-align: center;
      max-width: 300px;
    }

    .image-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .image-description {
      font-size: 1.1rem;
      opacity: 0.9;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
    }

    .feature-icon {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .login-container {
        padding: 1rem;
      }

      .login-wrapper {
        grid-template-columns: 1fr;
        min-height: auto;
      }

      .login-image-section {
        order: -1;
        padding: 2rem;
      }

      .login-form-section {
        padding: 2rem;
      }

      .form-title {
        font-size: 1.5rem;
      }

      .image-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Simula uma requisição de login
      setTimeout(() => {
        this.isLoading = false;
        console.log('Login realizado:', this.loginForm.value);
        // Aqui você implementaria a lógica de autenticação real
      }, 2000);
    } else {
      // Marca todos os campos como touched para mostrar erros
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }
}