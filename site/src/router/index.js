import { createRouter, createWebHistory } from 'vue-router'
import { useI18n } from '../composables/useI18n'

import AccueilView from '../views/AccueilView.vue'
import ParcoursView from '../views/ParcoursView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import DoubleProjetView from '../views/DoubleProjetView.vue'
import ProjetInsaView from '../views/ProjetInsaView.vue'
import ActivitesView from '../views/ActivitesView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView,
    meta: { titleKey: 'nav.accueil' }
  },
  {
    path: '/parcours',
    name: 'parcours',
    component: ParcoursView,
    meta: { titleKey: 'nav.parcours' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: { titleKey: 'nav.portfolio' }
  },
  {
    path: '/double-projet',
    name: 'double-projet',
    component: DoubleProjetView,
    meta: { titleKey: 'nav.doublProjet' }
  },
  {
    path: '/projet-insa',
    name: 'projet-insa',
    component: ProjetInsaView,
    meta: { titleKey: 'nav.insaToulouse' }
  },
  {
    path: '/activites',
    name: 'activites',
    component: ActivitesView,
    meta: { titleKey: 'nav.activites' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { titleKey: 'nav.contact' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

const { t } = useI18n()

router.beforeEach((to) => {
  const tagline = t('footer.tagline')
  document.title = `${t(to.meta.titleKey)} | Violette - ${tagline}`
})

export default router
