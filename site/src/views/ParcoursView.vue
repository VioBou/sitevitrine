<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <div class="parcours">
    <!-- ======================== EN-TÊTE ======================== -->
    <section class="page-header">
      <div class="container">
        <span class="section__subtitle">{{ t('parcours.subtitle') }}</span>
        <h1>{{ t('parcours.title') }}</h1>
        <p class="page-header__description">{{ t('parcours.description') }}</p>
      </div>
    </section>

    <!-- ======================== PARCOURS SCOLAIRE ======================== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('parcours.schoolLabel') }}</span>
          <h2 class="section__title">{{ t('parcours.schoolTitle') }}</h2>
        </div>

        <div class="timeline">
          <div class="timeline__item">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__year">{{ t('parcours.yearX') }}</span>
              <h3>{{ t('parcours.result') }} : 15,10 / 20</h3>
              <p>{{ t('parcours.schoolDetails') }}</p>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__year">{{ t('parcours.yearY') }}</span>
              <h3>{{ t('parcours.result') }} : 13,22 / 20</h3>
              <p>{{ t('parcours.schoolDetails') }}</p>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__year">{{ t('parcours.yearZ') }}</span>
              <h3>{{ t('parcours.result') }} : 12,10 / 20</h3>
              <p>{{ t('parcours.schoolDetails') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== PARCOURS ARTISTIQUE ======================== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('parcours.danceLabel') }}</span>
          <h2 class="section__title">{{ t('parcours.danceTitle') }}</h2>
        </div>

        <div class="timeline">
          <div class="timeline__item">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__year">{{ t('parcours.period') }}</span>
              <h3>{{ t('parcours.danceTraining') }}</h3>
              <p>{{ t('parcours.danceDetails') }}</p>
              <div class="media-placeholder" style="margin-top: 16px;">
                {{ t('parcours.dancePhoto') }}
              </div>
            </div>
          </div>

          <div class="timeline__item">
            <div class="timeline__marker"></div>
            <div class="timeline__content">
              <span class="timeline__year">{{ t('parcours.period') }}</span>
              <h3>{{ t('parcours.otherTraining') }}</h3>
              <p>{{ t('parcours.otherDetails') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== ÉVOLUTION ======================== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('parcours.evolutionLabel') }}</span>
          <h2 class="section__title">{{ t('parcours.evolutionTitle') }}</h2>
          <p class="section__description">{{ t('parcours.evolutionDesc') }}</p>
        </div>

        <div class="evolution__grid grid grid--2">
          <div class="card">
            <div class="media-placeholder card__image">
              {{ t('parcours.beginningsPhoto') }}
            </div>
            <div class="card__body">
              <h3 class="card__title">{{ t('parcours.beginnings') }}</h3>
              <p class="card__text">{{ t('parcours.beginningsDesc') }}</p>
            </div>
          </div>

          <div class="card">
            <div class="media-placeholder card__image">
              {{ t('parcours.todayPhoto') }}
            </div>
            <div class="card__body">
              <h3 class="card__title">{{ t('parcours.today') }}</h3>
              <p class="card__text">{{ t('parcours.todayDesc') }}</p>
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
  max-width: 550px;
  margin: 0 auto;
}

/* --- Timeline --- */
.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline__item {
  position: relative;
  padding-bottom: 48px;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__marker {
  position: absolute;
  left: -36px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 3px solid var(--color-bg);
  box-shadow: 0 0 0 2px var(--color-accent);
}

.section--alt .timeline__marker {
  border-color: var(--color-bg-alt);
}

.timeline__year {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.timeline__content h3 {
  margin-bottom: 8px;
}

.timeline__content p {
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .page-header {
    padding: 110px 0 40px;
  }
}
</style>
