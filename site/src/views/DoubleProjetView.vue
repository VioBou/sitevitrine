<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<template>
  <div class="double-projet">
    <!-- ======================== EN-TÊTE ======================== -->
    <section class="page-header">
      <div class="container">
        <span class="section__subtitle">{{ t('doubleProjet.subtitle') }}</span>
        <h1>{{ t('doubleProjet.title') }}</h1>
        <p class="page-header__description">{{ t('doubleProjet.description') }}</p>
      </div>
    </section>

    <!-- ======================== VUE D'ENSEMBLE ======================== -->
    <section class="section">
      <div class="container">
        <div class="overview">
          <div class="overview__visual">
            <div class="media-placeholder">
              {{ t('doubleProjet.photoPlaceholder') }}
            </div>
          </div>

          <div class="overview__content">
            <h2>{{ t('doubleProjet.balanceTitle') }}</h2>
            <p>{{ t('doubleProjet.balanceText') }}</p>

            <div class="stats">
              <div class="stats__item">
                <span class="stats__number">20h</span>
                <span class="stats__label">{{ t('doubleProjet.danceWeek') }}</span>
              </div>
              <div class="stats__item">
                <span class="stats__number">Xh</span>
                <span class="stats__label">{{ t('doubleProjet.classWeek') }}</span>
              </div>
              <div class="stats__item">
                <span class="stats__number">X</span>
                <span class="stats__label">{{ t('doubleProjet.yearsOfDance') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== ORGANISATION ======================== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('doubleProjet.methodLabel') }}</span>
          <h2 class="section__title">{{ t('doubleProjet.methodTitle') }}</h2>
          <p class="section__description">{{ t('doubleProjet.methodDesc') }}</p>
        </div>

        <div class="grid grid--3">
          <div class="orga-card">
            <div class="orga-card__icon"><span>01</span></div>
            <h3>{{ t('doubleProjet.organization') }}</h3>
            <p>{{ t('doubleProjet.orgaDetail') }}</p>
          </div>

          <div class="orga-card">
            <div class="orga-card__icon"><span>02</span></div>
            <h3>{{ t('doubleProjet.rigor') }}</h3>
            <p>{{ t('doubleProjet.rigorDetail') }}</p>
          </div>

          <div class="orga-card">
            <div class="orga-card__icon"><span>03</span></div>
            <h3>{{ t('doubleProjet.passion') }}</h3>
            <p>{{ t('doubleProjet.passionDetail') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================== SEMAINE TYPE ======================== -->
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__subtitle">{{ t('doubleProjet.dailyLabel') }}</span>
          <h2 class="section__title">{{ t('doubleProjet.dailyTitle') }}</h2>
        </div>

        <div class="schedule">
          <div class="schedule__day" v-for="day in t('doubleProjet.days')" :key="day">
            <h3 class="schedule__day-name">{{ day }}</h3>
            <div class="schedule__slots">
              <p class="schedule__placeholder">{{ t('doubleProjet.schedulePlaceholder') }}</p>
            </div>
          </div>
        </div>

        <div class="schedule__legend">
          <span class="schedule__legend-item schedule__legend-item--etudes">{{ t('doubleProjet.legendStudies') }}</span>
          <span class="schedule__legend-item schedule__legend-item--danse">{{ t('doubleProjet.legendDance') }}</span>
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

/* --- Overview --- */
.overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.overview__content h2 {
  margin-bottom: 16px;
}

.overview__content p {
  margin-bottom: 32px;
}

/* --- Stats --- */
.stats {
  display: flex;
  gap: 32px;
}

.stats__item {
  display: flex;
  flex-direction: column;
}

.stats__number {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-accent);
  line-height: 1;
}

.stats__label {
  font-size: 0.8rem;
  color: var(--color-text-light);
  margin-top: 4px;
}

/* --- Orga cards --- */
.orga-card {
  background: var(--color-white);
  padding: 36px 28px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.orga-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
}

.orga-card__icon {
  margin-bottom: 20px;
}

.orga-card__icon span {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-accent);
}

.orga-card h3 {
  margin-bottom: 12px;
}

.orga-card p {
  font-size: 0.9rem;
}

/* --- Planning semaine --- */
.schedule {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.schedule__day {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
  min-height: 200px;
}

.schedule__day-name {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-accent);
}

.schedule__slot {
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  font-size: 0.8rem;
}

.schedule__slot--etudes {
  background: rgba(26, 26, 46, 0.08);
}

.schedule__slot--danse {
  background: rgba(196, 168, 130, 0.2);
}

.schedule__time {
  display: block;
  font-weight: 600;
  font-size: 0.75rem;
}

.schedule__placeholder {
  font-size: 0.8rem;
  font-style: italic;
  color: var(--color-text-light);
}

.schedule__legend {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.schedule__legend-item {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.schedule__legend-item::before {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.schedule__legend-item--etudes::before {
  background: rgba(26, 26, 46, 0.15);
}

.schedule__legend-item--danse::before {
  background: rgba(196, 168, 130, 0.35);
}

@media (max-width: 1024px) {
  .schedule {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 110px 0 40px;
  }

  .overview {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .stats {
    justify-content: center;
  }

  .schedule {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
