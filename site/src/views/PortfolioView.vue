<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const portfolioItems = ref([
  { id: 1, title: 'Performance 1', category: 'classique', description: null, type: 'image', src: null },
  { id: 2, title: 'Performance 2', category: 'contemporain', description: null, type: 'video', src: null },
  { id: 3, title: 'Performance 3', category: 'classique', description: null, type: 'image', src: null },
  { id: 4, title: 'Performance 4', category: 'spectacle', description: null, type: 'video', src: null },
  { id: 5, title: 'Performance 5', category: 'contemporain', description: null, type: 'image', src: null },
  { id: 6, title: 'Performance 6', category: 'spectacle', description: null, type: 'video', src: null }
])

const categoryKeys = ['all', 'classique', 'contemporain', 'spectacle']

const activeFilter = ref('all')

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return portfolioItems.value
  return portfolioItems.value.filter(item => item.category === activeFilter.value)
})

function getCategoryLabel(key) {
  const map = { all: 'portfolio.all', classique: 'portfolio.classique', contemporain: 'portfolio.contemporain', spectacle: 'portfolio.spectacle' }
  return t(map[key] || key)
}
</script>

<template>
  <div class="portfolio">
    <!-- ======================== EN-TÊTE ======================== -->
    <section class="page-header">
      <div class="container">
        <span class="section__subtitle">{{ t('portfolio.subtitle') }}</span>
        <h1>{{ t('portfolio.title') }}</h1>
        <p class="page-header__description">{{ t('portfolio.description') }}</p>
      </div>
    </section>

    <!-- ======================== FILTRES ======================== -->
    <section class="section">
      <div class="container">
        <div class="portfolio__filters">
          <button
            v-for="cat in categoryKeys"
            :key="cat"
            class="portfolio__filter"
            :class="{ 'portfolio__filter--active': activeFilter === cat }"
            @click="activeFilter = cat"
          >
            {{ getCategoryLabel(cat) }}
          </button>
        </div>

        <!-- ======================== GRILLE ======================== -->
        <div class="portfolio__grid">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="portfolio__item"
          >
            <div class="portfolio__media">
              <template v-if="item.src">
                <img v-if="item.type === 'image'" :src="item.src" :alt="item.title" class="portfolio__img" />
                <video v-else :src="item.src" controls preload="metadata" class="portfolio__video"></video>
              </template>
              <template v-else>
                <div class="media-placeholder">
                  {{ item.type === 'video' ? t('portfolio.video') : t('portfolio.photo') }} {{ t('portfolio.addMedia') }}
                </div>
              </template>
              <span class="portfolio__type-badge" v-if="item.type === 'video'">
                {{ t('portfolio.video') }}
              </span>
            </div>

            <div class="portfolio__info">
              <div class="portfolio__meta">
                <span class="tag tag--accent">{{ getCategoryLabel(item.category) }}</span>
              </div>
              <h3 class="portfolio__title">{{ t('portfolio.perf') }} {{ item.id }}</h3>
              <p class="portfolio__desc">{{ t('portfolio.perfDesc') }}</p>
            </div>
          </div>
        </div>

        <!-- ======================== SECTION DÉTAILS ======================== -->
        <div class="portfolio__details">
          <div class="section__header">
            <span class="section__subtitle">{{ t('portfolio.detailLabel') }}</span>
            <h2 class="section__title">{{ t('portfolio.detailTitle') }}</h2>
          </div>

          <div class="detail-block">
            <div class="detail-block__media">
              <div class="media-placeholder">
                {{ t('portfolio.detailPlaceholder') }}
              </div>
            </div>
            <div class="detail-block__text">
              <h3>{{ t('portfolio.perfName') }}</h3>
              <p>{{ t('portfolio.perfDetail') }}</p>
              <div class="detail-block__tags">
                <span class="tag">{{ t('portfolio.tagStyle') }}</span>
                <span class="tag">{{ t('portfolio.tagYear') }}</span>
                <span class="tag">{{ t('portfolio.tagPlace') }}</span>
              </div>
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

/* --- Filtres --- */
.portfolio__filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.portfolio__filter {
  padding: 8px 24px;
  border: 1.5px solid var(--color-border);
  border-radius: 30px;
  background: transparent;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-light);
  cursor: pointer;
  transition: var(--transition);
}

.portfolio__filter:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.portfolio__filter--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-text-inverse);
}

[data-theme="dark"] .portfolio__filter--active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #1a1a2e;
}

/* --- Grille portfolio --- */
.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.portfolio__item {
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.portfolio__item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.portfolio__media {
  position: relative;
}

.portfolio__img,
.portfolio__video {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.portfolio__type-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 10px;
  background: rgba(26, 26, 46, 0.8);
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.portfolio__info {
  padding: 20px;
}

.portfolio__meta {
  margin-bottom: 8px;
}

.portfolio__title {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.portfolio__desc {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

/* --- Détail block --- */
.portfolio__details {
  padding-top: 40px;
  border-top: 1px solid var(--color-border);
}

.detail-block {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
  margin-top: 40px;
}

.detail-block__text h3 {
  margin-bottom: 12px;
}

.detail-block__text p {
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.detail-block__tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .portfolio__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 110px 0 40px;
  }

  .portfolio__grid {
    grid-template-columns: 1fr;
  }

  .detail-block {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
