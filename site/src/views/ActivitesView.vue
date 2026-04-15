<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <div class="activites">
    <!-- ======================== EN-TÊTE ======================== -->
    <section class="page-header">
      <div class="container">
        <span class="section__subtitle">{{ t('activites.subtitle') }}</span>
        <h1>{{ t('activites.title') }}</h1>
        <p class="page-header__description">{{ t('activites.description') }}</p>
      </div>
    </section>

    <!-- ======================== STAGES ======================== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('activites.stagesLabel') }}</span>
          <h2 class="section__title">{{ t('activites.stagesTitle') }}</h2>
        </div>

        <div class="grid grid--2">
          <div class="activity-card" v-for="n in 2" :key="n">
            <div class="activity-card__image">
              <div class="media-placeholder">
                {{ t('activites.stagePhoto') }}
              </div>
            </div>
            <div class="activity-card__body">
              <span class="activity-card__date">{{ t('activites.stageDate') }}</span>
              <h3>{{ t('activites.stageName') }}</h3>
              <p>{{ t('activites.stageDesc') }}</p>
              <div class="activity-card__tags">
                <span class="tag">{{ t('activites.tagStyle') }}</span>
                <span class="tag">{{ t('activites.tagPlace') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== SPECTACLES ======================== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('activites.showsLabel') }}</span>
          <h2 class="section__title">{{ t('activites.showsTitle') }}</h2>
        </div>

        <div class="spectacles-list">
          <div class="spectacle-item">
            <div class="spectacle-item__media">
              <div class="media-placeholder">
                {{ t('activites.showPhoto') }}
              </div>
            </div>
            <div class="spectacle-item__content">
              <span class="spectacle-item__date">{{ t('activites.showDate') }}</span>
              <h3>{{ t('activites.showName') }}</h3>
              <p>{{ t('activites.showDesc') }}</p>
            </div>
          </div>

          <div class="spectacle-item">
            <div class="spectacle-item__media">
              <div class="media-placeholder">
                {{ t('activites.showPhoto') }}
              </div>
            </div>
            <div class="spectacle-item__content">
              <span class="spectacle-item__date">{{ t('activites.showDate') }}</span>
              <h3>{{ t('activites.showName') }}</h3>
              <p>{{ t('activites.showDescShort') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== ENGAGEMENTS ======================== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('activites.engagementLabel') }}</span>
          <h2 class="section__title">{{ t('activites.engagementTitle') }}</h2>
          <p class="section__description">{{ t('activites.engagementDesc') }}</p>
        </div>

        <div class="grid grid--3">
          <div class="engagement-card" v-for="n in 3" :key="n">
            <div class="engagement-card__icon">
              <span>{{ n }}</span>
            </div>
            <h3>{{ t('activites.engagementName') }}</h3>
            <p>{{ t('activites.engagementDetail') }}</p>
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

/* --- Activity cards (stages) --- */
.activity-card {
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.activity-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.activity-card__body {
  padding: 24px;
}

.activity-card__date {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
}

.activity-card__body h3 {
  margin: 8px 0;
  font-size: 1.1rem;
}

.activity-card__body p {
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.activity-card__tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

/* --- Spectacles --- */
.spectacles-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.spectacle-item {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  padding: 24px;
}

.spectacle-item:nth-child(even) {
  direction: rtl;
}

.spectacle-item:nth-child(even) > * {
  direction: ltr;
}

.spectacle-item__date {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
}

.spectacle-item__content h3 {
  margin: 8px 0 12px;
}

.spectacle-item__content p {
  font-size: 0.9rem;
}

/* --- Engagements --- */
.engagement-card {
  background: var(--color-white);
  padding: 32px 24px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  text-align: center;
  transition: var(--transition);
}

.engagement-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.engagement-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(196, 168, 130, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.engagement-card__icon span {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-accent);
}

.engagement-card h3 {
  margin-bottom: 8px;
  font-size: 1rem;
}

.engagement-card p {
  font-size: 0.85rem;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .page-header {
    padding: 110px 0 40px;
  }

  .spectacle-item {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .spectacle-item:nth-child(even) {
    direction: ltr;
  }
}
</style>
