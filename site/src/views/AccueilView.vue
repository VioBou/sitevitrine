<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <div class="accueil">
    <!-- ======================== HERO ======================== -->
    <section class="hero">
      <div class="hero__background">
        <div class="hero__bg-placeholder"></div>
      </div>

      <div class="hero__content container">
        <span class="hero__label">{{ t('accueil.heroLabel') }}</span>
        <h1 class="hero__title">Violette</h1>
        <p class="hero__subtitle">{{ t('accueil.heroSubtitle') }}</p>
        <div class="hero__actions">
          <router-link to="/portfolio" class="btn btn--primary">{{ t('accueil.btnPortfolio') }}</router-link>
          <router-link to="/double-projet" class="btn btn--outline btn--light">{{ t('accueil.btnProjet') }}</router-link>
        </div>
      </div>
    </section>

    <!-- ======================== INTRODUCTION ======================== -->
    <section class="section intro">
      <div class="container">
        <div class="intro__grid">
          <div class="intro__photo">
            <div class="media-placeholder media-placeholder--portrait">
              {{ t('accueil.portraitPlaceholder') }}
            </div>
          </div>

          <div class="intro__text">
            <span class="section__subtitle">{{ t('accueil.whoAmI') }}</span>
            <h2>{{ t('accueil.title') }}</h2>
            <p>{{ t('accueil.intro1') }}</p>
            <p>{{ t('accueil.intro2') }}</p>
            <router-link to="/parcours" class="btn btn--primary">
              {{ t('accueil.btnParcours') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== APERÇU PORTFOLIO ======================== -->
    <section class="section section--alt apercu">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('accueil.portfolioLabel') }}</span>
          <h2 class="section__title">{{ t('accueil.portfolioTitle') }}</h2>
          <p class="section__description">{{ t('accueil.portfolioDesc') }}</p>
        </div>

        <div class="grid grid--3">
          <div class="card" v-for="n in 3" :key="n">
            <div class="media-placeholder card__image">
              {{ t('accueil.photoVideo') }} {{ n }} {{ t('accueil.addMedia') }}
            </div>
            <div class="card__body">
              <h3 class="card__title">{{ t('accueil.perfTitle') }} {{ n }}</h3>
              <p class="card__text">{{ t('accueil.perfDesc') }}</p>
            </div>
          </div>
        </div>

        <div class="apercu__cta">
          <router-link to="/portfolio" class="btn btn--primary">
            {{ t('accueil.btnAll') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- Hero --- */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 72px;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary) 0%, #2a2a4e 50%, var(--color-accent) 100%);
}

.hero__bg-image,
.hero__background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-text-inverse);
}

[data-theme="dark"] .hero__content {
  color: #faf8f5;
}

.hero__label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-accent);
  margin-bottom: 16px;
}

.hero__title {
  color: var(--color-text-inverse);
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 20px;
}

[data-theme="dark"] .hero__title {
  color: #faf8f5;
}

.hero__subtitle {
  font-size: 1.15rem;
  color: rgba(250, 248, 245, 0.85);
  max-width: 550px;
  margin: 0 auto 36px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn--light {
  border-color: rgba(250, 248, 245, 0.5);
  color: var(--color-text-inverse);
}

[data-theme="dark"] .btn--light {
  color: #faf8f5;
  border-color: rgba(250, 248, 245, 0.5);
}

.btn--light:hover {
  background: var(--color-text-inverse);
  color: var(--color-primary);
}

[data-theme="dark"] .btn--light:hover {
  background: #faf8f5;
  color: #1a1a2e;
}

/* --- Intro --- */
.intro__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
}

.intro__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.intro__text p {
  margin-bottom: 4px;
}

/* --- Aperçu --- */
.apercu__cta {
  text-align: center;
  margin-top: 48px;
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
  }

  .intro__grid {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .intro__text {
    align-items: center;
  }
}
</style>
