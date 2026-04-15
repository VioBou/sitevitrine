<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const menuOpen = ref(false)
const { t, locale, setLocale } = useI18n()
const { theme, toggleTheme } = useTheme()

const navLinks = [
  { key: 'nav.accueil', to: '/' },
  { key: 'nav.parcours', to: '/parcours' },
  { key: 'nav.portfolio', to: '/portfolio' },
  { key: 'nav.doublProjet', to: '/double-projet' },
  { key: 'nav.insaToulouse', to: '/projet-insa' },
  { key: 'nav.activites', to: '/activites' },
  { key: 'nav.contact', to: '/contact' }
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function switchLang() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <router-link to="/" class="navbar__logo" @click="closeMenu">
        <span class="navbar__logo-text">Violette</span>
      </router-link>

      <nav class="navbar__nav" :class="{ 'navbar__nav--open': menuOpen }">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          :class="{ 'navbar__link--active': route.path === link.to }"
          @click="closeMenu"
        >
          {{ t(link.key) }}
        </router-link>
      </nav>

      <div class="navbar__controls">
        <!-- Language toggle -->
        <button class="navbar__toggle" @click="switchLang" :aria-label="locale === 'fr' ? 'Switch to English' : 'Passer en français'">
          {{ locale === 'fr' ? 'EN' : 'FR' }}
        </button>

        <!-- Theme toggle -->
        <button class="navbar__toggle navbar__toggle--theme" @click="toggleTheme" :aria-label="theme === 'light' ? 'Mode sombre' : 'Mode clair'">
          <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>

        <!-- Burger menu -->
        <button
          class="navbar__burger"
          :class="{ 'navbar__burger--open': menuOpen }"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 248, 245, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: background var(--transition);
}

[data-theme="dark"] .navbar {
  background: rgba(26, 26, 46, 0.92);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  max-width: var(--container-width);
}

.navbar__logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: -0.02em;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar__link {
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--color-text-light);
  transition: color var(--transition);
  position: relative;
  letter-spacing: 0.01em;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--color-accent);
  transition: width var(--transition);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-primary);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 100%;
}

/* Controls wrapper */
.navbar__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Toggle buttons */
.navbar__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  background: transparent;
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: var(--transition);
}

.navbar__toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Burger menu */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary);
  transition: var(--transition);
}

.navbar__burger--open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar__burger--open span:nth-child(2) {
  opacity: 0;
}

.navbar__burger--open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar__burger {
    display: flex;
  }

  .navbar__nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    gap: 24px;
    background: var(--color-bg);
    transform: translateX(100%);
    transition: transform var(--transition);
  }

  .navbar__nav--open {
    transform: translateX(0);
  }

  .navbar__link {
    font-size: 1.1rem;
  }
}
</style>
