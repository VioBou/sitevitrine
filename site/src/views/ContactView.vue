<template>
  <div class="contact-page">
    <!-- ======================== EN-TÊTE ======================== -->
    <section class="page-header">
      <div class="container">
        <span class="section__subtitle">{{ t('contact.subtitle') }}</span>
        <h1>{{ t('contact.title') }}</h1>
        <p class="page-header__description">{{ t('contact.description') }}</p>
      </div>
    </section>

    <!-- ======================== CONTENU CONTACT ======================== -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Informations de contact -->
          <div class="contact-info">
            <h2>{{ t('contact.reachMe') }}</h2>

            <div class="contact-info__items">
              <div class="contact-info__item">
                <span class="contact-info__label">{{ t('contact.email') }}</span>
                <a :href="'mailto:' + email" class="contact-info__value">
                  {{ email }}
                </a>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="contact-social">
              <h3>{{ t('contact.socialTitle') }}</h3>
              <div class="contact-social__links">
                <p class="contact-social__placeholder">
                  {{ t('contact.socialPlaceholder') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="contact-form-wrapper">
            <h2>{{ t('contact.sendMessage') }}</h2>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="contact-form__group">
                <label for="name">{{ t('contact.labelName') }}</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  :placeholder="t('contact.placeholderName')"
                  required
                />
              </div>

              <div class="contact-form__group">
                <label for="email">{{ t('contact.labelEmail') }}</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  :placeholder="t('contact.placeholderEmail')"
                  required
                />
              </div>

              <div class="contact-form__group">
                <label for="subject">{{ t('contact.labelSubject') }}</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  :placeholder="t('contact.placeholderSubject')"
                />
              </div>

              <div class="contact-form__group">
                <label for="message">{{ t('contact.labelMessage') }}</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  :placeholder="t('contact.placeholderMessage')"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn--primary">
                {{ t('contact.send') }}
              </button>

              <p v-if="submitted" class="contact-form__success">
                {{ t('contact.success') }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const email = ref('ton.email@exemple.com')

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  console.log('Formulaire soumis :', { ...form })
  submitted.value = true

  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 3000)
}
</script>

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
  max-width: 500px;
  margin: 0 auto;
}

/* --- Contact grid --- */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
}

.contact-info h2,
.contact-form-wrapper h2 {
  margin-bottom: 32px;
}

/* --- Contact info --- */
.contact-info__items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.contact-info__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-info__label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
}

.contact-info__value {
  font-size: 1.05rem;
  color: var(--color-primary);
  transition: color var(--transition);
}

.contact-info__value:hover {
  color: var(--color-accent);
}

/* --- Social links --- */
.contact-social h3 {
  margin-bottom: 16px;
}

.contact-social__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: var(--transition);
}

.social-link:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
}

.social-link__name {
  font-weight: 500;
  color: var(--color-primary);
}

.social-link__handle {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.contact-social__placeholder {
  font-size: 0.85rem;
  font-style: italic;
  color: var(--color-text-light);
}

/* --- Formulaire --- */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-form__group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-primary);
}

.contact-form__group input,
.contact-form__group textarea {
  padding: 12px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: 6px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-text);
  background: var(--color-white);
  transition: border-color var(--transition);
  resize: vertical;
}

.contact-form__group input:focus,
.contact-form__group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.contact-form__success {
  font-size: 0.9rem;
  color: #2d8a4e;
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-header {
    padding: 110px 0 40px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
</style>
