<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__logo">Violette</span>
          <p class="footer__tagline">{{ t('footer.tagline') }}</p>
        </div>

        <nav class="footer__nav">
          <router-link to="/">{{ t('nav.accueil') }}</router-link>
          <router-link to="/parcours">{{ t('nav.parcours') }}</router-link>
          <router-link to="/portfolio">{{ t('nav.portfolio') }}</router-link>
          <router-link to="/double-projet">{{ t('nav.doublProjet') }}</router-link>
          <router-link to="/projet-insa">{{ t('nav.insaToulouse') }}</router-link>
          <router-link to="/activites">{{ t('nav.activites') }}</router-link>
          <router-link to="/contact">{{ t('nav.contact') }}</router-link>
        </nav>

        <div class="footer__social">
          <span class="footer__social-placeholder">{{ t('footer.social') }}</span>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ currentYear }} Bouzanquet Violette. {{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  padding: 60px 0 24px;
  margin-top: 80px;
}

[data-theme="dark"] .footer {
  background-color: #111128;
}

.footer__top {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
}

.footer__tagline {
  font-size: 0.85rem;
  color: rgba(250, 248, 245, 0.6);
  margin-top: 4px;
  max-width: none;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
  justify-content: center;
}

.footer__nav a {
  font-size: 0.85rem;
  color: rgba(250, 248, 245, 0.7);
  transition: color var(--transition);
}

.footer__nav a:hover {
  color: var(--color-accent);
}

.footer__social {
  text-align: right;
}

.footer__social-placeholder {
  font-size: 0.8rem;
  color: rgba(250, 248, 245, 0.4);
  font-style: italic;
}

.footer__bottom {
  padding-top: 24px;
  text-align: center;
}

.footer__bottom p {
  font-size: 0.8rem;
  color: rgba(250, 248, 245, 0.4);
  max-width: none;
}

@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__nav {
    justify-content: center;
  }

  .footer__social {
    text-align: center;
  }
}
</style>
