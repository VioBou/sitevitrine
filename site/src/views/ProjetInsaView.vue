<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <div class="projet-insa">
    <!-- ======================== EN-TÊTE ======================== -->
    <section class="page-header">
      <div class="container">
        <span class="section__subtitle">{{ t('projetInsa.subtitle') }}</span>
        <h1>{{ t('projetInsa.title') }}</h1>
        <p class="page-header__description">{{ t('projetInsa.description') }}</p>
      </div>
    </section>

    <!-- ======================== POURQUOI INSA ======================== -->
    <section class="section">
      <div class="container">
        <div class="insa-intro">
          <div class="insa-intro__content">
            <span class="section__subtitle">{{ t('projetInsa.schoolLabel') }}</span>
            <h2>{{ t('projetInsa.whyTitle') }}</h2>
            <p>{{ t('projetInsa.whyText') }}</p>
            <ul class="insa-points">
              <li v-for="n in 3" :key="n">
                <strong>{{ t('projetInsa.arg') }} {{ n }} {{ t('projetInsa.toComplete') }}</strong>
                <span>{{ t('projetInsa.argDetail') }}</span>
              </li>
            </ul>
          </div>

          <div class="insa-intro__visual">
            <div class="media-placeholder">
              {{ t('projetInsa.campusPhoto') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== DANSE-ÉTUDES ======================== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('projetInsa.compatLabel') }}</span>
          <h2 class="section__title">{{ t('projetInsa.compatTitle') }}</h2>
          <p class="section__description">{{ t('projetInsa.compatDesc') }}</p>
        </div>

        <div class="grid grid--2">
          <div class="compat-card" v-for="n in 4" :key="n">
            <h3>{{ t('projetInsa.advantage') }} {{ n }} {{ t('projetInsa.toComplete') }}</h3>
            <p>{{ t('projetInsa.advantageDetail') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== MON OBJECTIF ======================== -->
    <section class="section">
      <div class="container">
        <div class="objectif">
          <div class="objectif__content">
            <span class="section__subtitle">{{ t('projetInsa.visionLabel') }}</span>
            <h2>{{ t('projetInsa.visionTitle') }}</h2>
            <p>{{ t('projetInsa.visionText') }}</p>
            <blockquote class="objectif__quote">
              {{ t('projetInsa.quote') }}
            </blockquote>
          </div>

          <div class="objectif__visual">
            <div class="media-placeholder media-placeholder--portrait">
              {{ t('projetInsa.objectifPhoto') }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- Page header --- */
.page-header {
  padding: 140px 0 60px;
  text-align: center;
  background: linear-gradient(180deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
}

.page-header h1 {
  margin-top: 12px;
  margin-bottom: 16px;
}

.page-header__description {
  max-width: 600px;
  margin: 0 auto;
}

/* --- Intro INSA --- */
.insa-intro {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

.insa-intro__content h2 {
  margin-bottom: 16px;
}

.insa-intro__content p {
  margin-bottom: 24px;
}

.insa-points {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.insa-points li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 16px;
  border-left: 3px solid var(--color-accent);
}

.insa-points li strong {
  font-size: 1rem;
  color: var(--color-primary);
}

.insa-points li span {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

/* --- Compatibilité cards --- */
.compat-card {
  background: var(--color-white);
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.compat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.compat-card h3 {
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.compat-card p {
  font-size: 0.9rem;
}

/* --- Objectif --- */
.objectif {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 60px;
  align-items: center;
}

.objectif__content h2 {
  margin-bottom: 16px;
}

.objectif__content p {
  margin-bottom: 24px;
}

.objectif__quote {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-style: italic;
  color: var(--color-accent);
  padding-left: 20px;
  border-left: 3px solid var(--color-accent);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .page-header {
    padding: 110px 0 40px;
  }

  .insa-intro,
  .objectif {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
