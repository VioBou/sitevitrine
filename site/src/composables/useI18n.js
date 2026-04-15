import { ref, computed } from 'vue'

const locale = ref(localStorage.getItem('locale') || 'fr')

const translations = {
  fr: {
    // Navigation
    nav: {
      accueil: 'Accueil',
      parcours: 'Parcours',
      portfolio: 'Portfolio',
      doublProjet: 'Double Projet',
      insaToulouse: 'INSA Toulouse',
      activites: 'Activités',
      contact: 'Contact'
    },

    // Footer
    footer: {
      tagline: 'Danse & Études',
      social: 'Réseaux sociaux à venir',
      copyright: 'Tous droits réservés.'
    },

    // Accueil
    accueil: {
      heroLabel: 'Danse & Études',
      heroSubtitle: "Construire un parcours artistique exigeant au sein d'une formation scientifique ",
      btnPortfolio: 'Voir mon portfolio',
      btnProjet: 'Mon double projet',
      whoAmI: 'Qui suis-je',
      title: 'Danseuse & Étudiante',
      intro1: 'Je pratique la danse à un niveau exigeant depuis l âge de 4 ans, avec un investissement d environ 15 heures par semaine en parallèle de ma scolarité. Cette pratique intensive m a permis de développer rigueur, discipline et persévérance.',
      intro2: 'Malgré l absence d horaires aménagés, j ai toujours réussi à maintenir un bon niveau scolaire, avec des résultats solides en spécialités scientifiques. Cette capacité à concilier exigence artistique et réussite académique est aujourd hui au cœur de mon projet.',
      // intro3: 'Je souhaite poursuivre ce double engagement en intégrant une formation d ingénieur tout en continuant la danse à haut niveau, avec l ambition de progresser artistiquement et de m investir dans des projets au sein de l INSA.',
      btnParcours: 'Découvrir mon parcours',
      portfolioLabel: 'Portfolio',
      portfolioTitle: 'Moments de danse',
      portfolioDesc: 'Un aperçu de mon parcours artistique en images et en mouvement.',
      photoVideo: 'Photo/Vidéo',
      addMedia: 'à ajouter',
      perfTitle: 'Titre performance',
      perfDesc: 'Description à compléter',
      btnAll: 'Voir tout le portfolio',
      portraitPlaceholder: 'Photo portrait à ajouter'
    },

    // Parcours
    parcours: {
      subtitle: 'Mon parcours',
      title: 'Parcours scolaire & artistique',
      description: 'Mon évolution entre études et danse, année après année.',
      schoolLabel: 'Scolarité',
      schoolTitle: 'Parcours scolaire',
      yearX: '2024-2025',
      yearY: 'Année Y',
      yearZ: 'Année Z',
      result: 'Résultat',
      schoolDetails: 'Année de Première au lycée Ernest Hemingway (Nîmes 30)',
      danceLabel: 'Danse',
      danceTitle: 'Parcours artistique',
      period: 'Période 2021-2026',
      danceTraining: 'Formation en danse classique, jazz et contemporaine depuis l âge de 13 ans à Espace Danse Alès (EDA) dirigée par Scarlett Dutrey avec une pratique intensive d environ 15 heures par semaine.',
      danceDetails: 'Participation régulière depuis 4 ans au concours de la Confédération Natioanle de Dance (CND) avec plusieurs distinctions, 2 premiers prix avec accès au national en classique (Moyen 2 et supérieur 2), 1 premier prix accès national reclassé en niveau avancé en contemporaine, 3 premiers prix en groupe jazz/ contemporaine, dont 1 avec accès natioanl, tous également reclassé en pratique avancée. Ces expériences m ont permis de développer une technique solide, une capacité d adaptation et une véritable présence scénique. J ai également participé à de nombreux stages, avec différents intervenants comme la danseuse étoile Françoise Legrée, le maître de ballet David Sturmer et la danseuse Andrea Escober, David David Thole, Wayne Byars, Grégory Cianci, Alice Valentin, Laure Demolliere, Bastien Nozeran, Loïrys Doleson, Tarek Aït Meddour... Ainsi qu à plusieurs projets suite à des appels à participants au Cratère alès (30), Baal (groupes Noces by Florence bernard, Bal clandestin (Cie Chatha)) et spectacles renforçant mon ouverture artistique et mon expérience de la scène.',
      dancePhoto: 'Photo de la formation à ajouter',
      otherTraining: 'Formation en danse classique et modern jazz à EDA à raison de 3 heures par semaine depuis l âge de 4 ans.',
      otherDetails: 'Je n avais pas la possibilité de suivre plus de cours. Ainsi, j ai appris les bases et me contenter de 2 cours par semaine',
      evolutionLabel: 'Évolution',
      evolutionTitle: 'J ai commencé la danse jeune, en construisant progressivement une base technique en danse classique, avant de m ouvrir au jazz et au contemporain. Au fil des années, ma pratique est devenue plus régulière et structurée, avec une envie croissante de progression.',
      evolutionDesc: 'Mon parcours s est construit autour d un double engagement entre danse et études. Au fil des années, ma pratique artistique s est intensifiée jusqu à atteindre 15 heures oar semaine, en parallèle d une scolarité scientifique suivie sans horaires aménagés. Cette organisation m a appris à développer rigueur, autonomie et capacité de travail. Les concours et les distinctions obtenues ont renforcé mon exigenceartistique et mon expériencede la scène. Aujourd hui, je poursuis cet équilibre entre éxigence académique et engagement artistique, que je souhaite développer dans le cadre d un double projetau sein de L INSA.',
      beginningsPhoto: 'Photo ancienne / début de parcours',
      beginnings: 'Mes débuts',
      beginningsDesc: 'Description à compléter',
      todayPhoto: 'Photo récente / évolution',
      today: "Aujourd'hui",
      todayDesc: 'Description à compléter'
    },

    // Portfolio
    portfolio: {
      subtitle: 'Portfolio complet',
      title: 'Mon univers artistique',
      description: 'Vidéos, photos et moments forts de mon parcours en danse.',
      all: 'Tout',
      classique: 'Classique',
      contemporain: 'Contemporain',
      spectacle: 'Spectacle',
      video: 'Vidéo',
      photo: 'Photo',
      addMedia: 'à ajouter',
      detailLabel: 'En détail',
      detailTitle: 'Explications & Coulisses',
      detailPlaceholder: 'Vidéo/Photo en détail à ajouter',
      perfName: 'Nom de la performance',
      perfDetail: 'Explication détaillée de la performance à compléter. Parle du contexte, de la chorégraphie, de ce que tu as ressenti.',
      tagStyle: 'Style',
      tagYear: 'Année',
      tagPlace: 'Lieu',
      perfDesc: 'Description à compléter',
      perf: 'Performance'
    },

    // Double Projet
    doubleProjet: {
      subtitle: 'Mon engagement',
      title: 'Double Projet : Danse & Études',
      description: "Concilier 15 heures de danse par semaine avec un parcours académique exigeant.",
      photoPlaceholder: 'Photo illustrant le double projet',
      balanceTitle: 'Un équilibre au quotidien',
      balanceText: "Mon double projet repose sur un équilibre quotidien entre exigence académique et engagement artistique. Je consacre actuellement environ 15 heures par semaine à la danse, réparties entre les entraînements, les répétitions et le travail personnel. En parallèle, je poursuis une scolarité en spécialités scientifiques sans horaires aménagés, ce qui nécessite une organisation rigoureuse et une grande capacité d adaptation. Au fil du temps, j ai appris à structurer mon travail, à optimiser mon temps et à maintenir un niveau d exigence constant dans ces deux domaines. Cette double implication m a permis de développer des qualités essentielles telles que la discipline, l autonomie et la persévérance. Cet équilibre, exigeant mais structurant, est aujourd hui au cœur de mon projet : continuer à mener de front une formation d ingénieur et une pratique artistique à haut niveau.",
      danceWeek: 'de danse / semaine',
      classWeek: 'de cours / semaine',
      yearsOfDance: 'années de danse',
      methodLabel: 'Méthode',
      methodTitle: 'Organisation & Rigueur',
      methodDesc: "Comment je m'organise pour réussir dans les deux domaines.",
      organization: 'Organisation',
      orgaDetail: "Mes journées sont toutes planifiées, je répartis mon temps entre les cours, le travail personnel et les entraînements enadaptant mon rythme selon les périodes (contrôles, concours, représentations). Cette gestion du temps me permet de maintenir un équilibre tou en restant régulière dans mes efforts.",
      rigor: 'Rigueur',
      rigorDetail: "Mon organisation et mes projets nécessitent une rigueur constante. J'i appris à être efficace dans mon travail, à anticiper les échéances et à rester concentré dans chaque activité. Cette exigence m'a permis de maintenir un niveau scolaire solide tout en poursuivant une pratique artstique intensive.",
      passion: 'Passion',
      passionDetail: 'La danse est une véritable source de motivation dans mon quotidien. Elle me pousse à m investir pleinement; à me dépasser et à progresser constamment. Cette passion est le moteur de mon double projet elle est ce qui me donne l énergie pour mener de front mes études et la danse.',
      dailyLabel: 'Au quotidien',
      dailyTitle: 'Ma semaine type',
      days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      schedulePlaceholder: ['5h30- Levée, 8h- Début des cours, 15h- Fin des cours, 16h-révisions, 18h- Cours de danse classique, 19h30- cours Contemporain, 21h- entraînements si concours, 22h- révisions, 00h- Sommeil','5h30- Levée, 8h- Début cours, 17h- Fin des cours, 19h15- Cours Classique, 20h45- Entraînements si concours, 22h- révisions, 00h- Sommeil.'],
      legendStudies: 'Études',
      legendDance: 'Danse'
    },

    // Projet INSA
    projetInsa: {
      subtitle: 'Mon objectif',
      title: 'Projet INSA Toulouse',
      description: "Pourquoi l'INSA Toulouse est l'école idéale pour poursuivre mon double projet.",
      schoolLabel: "L'école",
      whyTitle: "Pourquoi l'INSA Toulouse ?",
      whyText: "L’INSA Toulouse correspond à mon projet car elle permet de suivre une formation scientifique exigeante tout en restant ouverte à des engagements personnels, notamment artistiques.",
      arg: 'Je souhaite intégrer une école qui valorise l autonomie, l investissement et l équilibre des parcours, afin de continuer à développer mon double projet danse-études dans un cadre structurant.',
      argDetail: 'Détail à compléter',
      toComplete: 'L environnement proposé, avec ses associations et sa vie étudiante dynamique, offre des opportunités concrètes de poursuivre une pratique artistique en parallèle des études.',
      campusPhoto: 'Photo campus INSA Toulouse',
      compatLabel: 'Compatibilité',
      compatTitle: "Pourquoi danse-études à l'INSA ?",
      compatDesc: "Comment l'INSA Toulouse permet de concilier excellence académique et pratique intensive de la danse.",
      advantage: 'Avantage',
      advantageDetail: "Détail à compléter.",
      visionLabel: 'Vision',
      visionTitle: 'Mon objectif',
      visionText: "Mon objectif est de construire un parcours équilibré entre études d’ingénieur et pratique artistique à haut niveau.Je souhaite continuer à progresser en danse, m’investir dans des projets artistiques et maintenir un entraînement régulier, tout en développant des compétences scientifiques solides. À plus long terme, ce double parcours me permettra de m’épanouir dans un environnement où exigence intellectuelle et expression artistique se complètent.",
      quote: '"Avancer avec rigueur, s\'exprimer avec sens."',
      objectifPhoto: 'Photo symbolisant ton objectif'
    },

    // Activités
    activites: {
      subtitle: 'Expériences',
      title: 'Activités & Engagements',
      description: 'Stages, spectacles et engagements qui enrichissent mon parcours.',
      stagesLabel: 'Formation',
      stagesTitle: 'Stages',
      stagePhoto: 'Photo du stage à ajouter',
      stageDate: 'Date à compléter',
      stageName: 'Nom du stage à compléter',
      stageDesc: 'Description du stage à compléter.',
      showsLabel: 'Scène',
      showsTitle: 'Spectacles',
      showPhoto: 'Photo/Vidéo du spectacle',
      showDate: 'Date à compléter',
      showName: 'Road trips and Birds, ...',
      showDesc: 'Créations de ces deux pièces par le Maître de Ballet Argentin David Sturmer, rester durant 2 mois nous avons travailler ces pièces à 6 comme un corps de ballet accompagnant la danseuse Andrea Escobar. J\'ai eu la chance de participer à ce projet, et ai eu la possibilité de travailller sur un duo et un trio en plus des deux pièces. Cette expérience a été enrichissantes tant pour ma technique que pour mon évolution personnel.',
      showDescShort: 'Description du spectacle à compléter.',
      engagementLabel: 'Implication',
      engagementTitle: 'Engagements',
      engagementDesc: 'Mes engagements au-delà de la danse et des études.',
      engagementName: ['Sport','Musique','Passions'],
      engagementDetail: ['Pratique de la natation pendant 10 ans. Cette expérience m\'a appris la persévérance et la gestion de l\'effort sur le long terme.', 'Pratique du piano pendant 7 ans, avec un fort intérêt pour la musique en général. Cette activité m\'a été bénéfique pour ma concentration et mon apprentissage musicale.', 'Intérêts pour la lecture, les arts et les sports mécaniques, avec notamment la participation à un stage de rallye. Ces centres d\'intérêts témoignent de ma curiosité et mon envie de découvrir des univers variés, en lien avec mon goût pour le mouvement et la performance.'],
      tagStyle: 'Style',
      tagPlace: 'Lieu'
    },

    // Contact
    contact: {
      subtitle: 'Échangeons',
      title: 'Contact',
      description: "N'hésitez pas à me contacter pour toute question ou opportunité.",
      reachMe: 'Me joindre',
      email: 'Email',
      socialTitle: 'Réseaux sociaux',
      socialPlaceholder: 'Liens vers les réseaux sociaux à ajouter',
      sendMessage: 'Envoyer un message',
      labelName: 'Nom',
      labelEmail: 'Email',
      labelSubject: 'Sujet',
      labelMessage: 'Message',
      placeholderName: 'Votre nom',
      placeholderEmail: 'votre@email.com',
      placeholderSubject: 'Sujet de votre message',
      placeholderMessage: 'Votre message...',
      send: 'Envoyer',
      success: 'Message envoyé avec succès !'
    }
  },

  en: {
    // Navigation
    nav: {
      accueil: 'Home',
      parcours: 'Journey',
      portfolio: 'Portfolio',
      doublProjet: 'Dual Project',
      insaToulouse: 'INSA Toulouse',
      activites: 'Activities',
      contact: 'Contact'
    },

    // Footer
    footer: {
      tagline: 'Dance & Studies',
      social: 'Social media coming soon',
      copyright: 'All rights reserved.'
    },

    // Accueil
    accueil: {
      heroLabel: 'Dance & Studies',
      heroSubtitle: 'Tagline to customize',
      btnPortfolio: 'View my portfolio',
      btnProjet: 'My dual project',
      whoAmI: 'About me',
      title: 'Dancer & Student',
      intro1: 'Personal introduction to complete. Talk about who you are, your passion for dance, and your journey.',
      intro2: 'Introduction to your dance-studies dual project to complete.',
      btnParcours: 'Discover my journey',
      portfolioLabel: 'Portfolio',
      portfolioTitle: 'Dance moments',
      portfolioDesc: 'A glimpse of my artistic journey in images and movement.',
      photoVideo: 'Photo/Video',
      addMedia: 'to add',
      perfTitle: 'Performance title',
      perfDesc: 'Description to complete',
      btnAll: 'View full portfolio',
      portraitPlaceholder: 'Portrait photo to add'
    },

    // Parcours
    parcours: {
      subtitle: 'My journey',
      title: 'Academic & artistic journey',
      description: 'My evolution between studies and dance, year after year.',
      schoolLabel: 'Education',
      schoolTitle: 'Academic journey',
      yearX: 'Year X',
      yearY: 'Year Y',
      yearZ: 'Year Z',
      result: 'Result',
      schoolDetails: 'School and details to complete',
      danceLabel: 'Dance',
      danceTitle: 'Artistic journey',
      period: 'Period',
      danceTraining: 'Dance training to complete',
      danceDetails: 'Training details to complete',
      dancePhoto: 'Training photo to add',
      otherTraining: 'Other training to complete',
      otherDetails: 'Details to complete',
      evolutionLabel: 'Evolution',
      evolutionTitle: 'My evolution',
      evolutionDesc: 'How I grew through dance and studies.',
      beginningsPhoto: 'Old photo / early journey',
      beginnings: 'My beginnings',
      beginningsDesc: 'Description to complete',
      todayPhoto: 'Recent photo / evolution',
      today: 'Today',
      todayDesc: 'Description to complete'
    },

    // Portfolio
    portfolio: {
      subtitle: 'Full portfolio',
      title: 'My artistic universe',
      description: 'Videos, photos and highlights of my dance journey.',
      all: 'All',
      classique: 'Classical',
      contemporain: 'Contemporary',
      spectacle: 'Show',
      video: 'Video',
      photo: 'Photo',
      addMedia: 'to add',
      detailLabel: 'In detail',
      detailTitle: 'Explanations & Behind the scenes',
      detailPlaceholder: 'Detailed video/photo to add',
      perfName: 'Performance name',
      perfDetail: 'Detailed explanation of the performance to complete. Talk about the context, choreography, and how you felt.',
      tagStyle: 'Style',
      tagYear: 'Year',
      tagPlace: 'Venue',
      perfDesc: 'Description to complete',
      perf: 'Performance'
    },

    // Double Projet
    doubleProjet: {
      subtitle: 'My commitment',
      title: 'Dual Project: Dance & Studies',
      description: 'Balancing 20 hours of dance per week with a demanding academic path.',
      photoPlaceholder: 'Photo illustrating the dual project',
      balanceTitle: 'A daily balance',
      balanceText: 'Presentation of the dual project to complete. Explain what it involves on a daily basis.',
      danceWeek: 'of dance / week',
      classWeek: 'of classes / week',
      yearsOfDance: 'years of dance',
      methodLabel: 'Method',
      methodTitle: 'Organization & Rigor',
      methodDesc: 'How I organize myself to succeed in both areas.',
      organization: 'Organization',
      orgaDetail: 'Details about your organization to complete.',
      rigor: 'Rigor',
      rigorDetail: 'Details about your rigor to complete.',
      passion: 'Passion',
      passionDetail: 'Details about your motivation to complete.',
      dailyLabel: 'Daily life',
      dailyTitle: 'My typical week',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      schedulePlaceholder: 'Schedule to complete',
      legendStudies: 'Studies',
      legendDance: 'Dance'
    },

    // Projet INSA
    projetInsa: {
      subtitle: 'My goal',
      title: 'INSA Toulouse Project',
      description: 'Why INSA Toulouse is the ideal school to pursue my dual project.',
      schoolLabel: 'The school',
      whyTitle: 'Why INSA Toulouse?',
      whyText: 'Explain here why INSA Toulouse matches your ambitions. Talk about what attracts you to this school in particular.',
      arg: 'Argument',
      argDetail: 'Detail to complete',
      toComplete: 'to complete',
      campusPhoto: 'INSA Toulouse campus photo',
      compatLabel: 'Compatibility',
      compatTitle: 'Why dance-studies at INSA?',
      compatDesc: 'How INSA Toulouse allows combining academic excellence with intensive dance practice.',
      advantage: 'Advantage',
      advantageDetail: 'Detail to complete.',
      visionLabel: 'Vision',
      visionTitle: 'My goal',
      visionText: 'Describe your professional and personal goal to complete. How dance and engineering studies complement each other in your vision.',
      quote: '"Personal quote to complete"',
      objectifPhoto: 'Photo symbolizing your goal'
    },

    // Activités
    activites: {
      subtitle: 'Experiences',
      title: 'Activities & Commitments',
      description: 'Internships, shows and commitments that enrich my journey.',
      stagesLabel: 'Training',
      stagesTitle: 'Internships',
      stagePhoto: 'Internship photo to add',
      stageDate: 'Date to complete',
      stageName: 'Internship name to complete',
      stageDesc: 'Internship description to complete.',
      showsLabel: 'Stage',
      showsTitle: 'Shows',
      showPhoto: 'Show photo/video',
      showDate: 'Date to complete',
      showName: 'Show name to complete',
      showDesc: 'Show description to complete. Talk about the venue, your role, the experience.',
      showDescShort: 'Show description to complete.',
      engagementLabel: 'Involvement',
      engagementTitle: 'Commitments',
      engagementDesc: 'My commitments beyond dance and studies.',
      engagementName: 'Commitment to complete',
      engagementDetail: 'Description to complete.',
      tagStyle: 'Style',
      tagPlace: 'Venue'
    },

    // Contact
    contact: {
      subtitle: "Let's connect",
      title: 'Contact',
      description: 'Feel free to reach out for any question or opportunity.',
      reachMe: 'Reach me',
      email: 'Email',
      socialTitle: 'Social media',
      socialPlaceholder: 'Social media links to add',
      sendMessage: 'Send a message',
      labelName: 'Name',
      labelEmail: 'Email',
      labelSubject: 'Subject',
      labelMessage: 'Message',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderSubject: 'Subject of your message',
      placeholderMessage: 'Your message...',
      send: 'Send',
      success: 'Message sent successfully!'
    }
  }
}

export function useI18n() {
  function setLocale(lang) {
    locale.value = lang
    localStorage.setItem('locale', lang)
    document.documentElement.lang = lang
  }

  function t(key) {
    const keys = key.split('.')
    let value = translations[locale.value]
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    return value !== undefined ? value : key
  }

  return {
    locale,
    setLocale,
    t
  }
}
