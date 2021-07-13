import sortBy from "lodash.sortby";

export const state = () => ({
  experiences: [
    {
      job: "Développeur junior",
      date: "2019 - 2021",
      company: "Mano",
      places: "Le Mans (72)",
      description: "",
      img: "mano.png"
    },
    {
      job: "Manager (Responsable de zone)",
      date: "2018 - 2019",
      company: "McDonald's",
      places: "Arçonnay (72)",
      img: "mcdonalds.png"
    },
    {
      job: "Équipier polyvalent",
      date: "2017 - 2018",
      company: "McDonald's",
      places: "Arçonnay (72)",
      img: "mcdonalds.png"
    },
    {
      job: "Stagiaire",
      date: "Juin 2018",
      company: "Explotation des sources Roxane",
      places: "La Ferrière-Bochard (61)",
      img: "water.png",
      description: "- Développement Web" +
        "- Déploiement de serveur"
    }
  ],
  formations: [
    {
      title: "Responsable en ingénierie des logiciels (BAC +4)",
      institution: "CESI",
      date: "Depuis 2019",
      places: "Le Mans (72)",
      description: "Pas encore obtenu"
    },
    {
      title: "BTS Systèmes numériques option informatique et réseaux",
      institution: "Insitution Immaculée Conception",
      date: "2017 - 2019",
      places: "Laval (53)"
    },
    {
      title: "Fondamentaux du leadership de niveau 1",
      institution: "McDonald's France",
      date: "Février 2019",
      places: "Guyancourt (78)"
    },
    {
      title: "Baccalauréat technologique STI2D option SIN",
      institution: "Lycée Alain",
      date: "2015 - 2017",
      places: "Alençon (61)"
    }
  ],
  skills: {
    software: [
      {
        name: "HTML & CSS",
        level: 5
      },
      {
        name: "Javascript",
        level: 5,
        description: ""
      },
      {
        name: "Vue Js",
        level: 5,
        description: ""
      },
      {
        name: "Nuxt Js",
        level: 5,
        description: ""
      },
      {
        name: "PHP",
        level: 4,
        description: ""
      },
      {
        name: "SQL",
        level: 4,
        description: ""
      },
      {
        name: "Linux & Windows",
        level: 4,
        description: "Bonne maîtrise de ces deux système d'exploitation"
      },
      {
        name: "C/C++",
        level: 4,
        description: ""
      },
      {
        name: "C#",
        level: 3,
        description: ""
      },
      {
        name: "Suite Microsoft Office",
        level: 4,
        description: ""
      },
      {
        name: "Python",
        level: 2,
        description: ""
      }
    ],
    other: [
      {
        name: "Travail d'équipe",
        level: 5,
        description: ""
      },
      {
        name: "Autonomie",
        level: 5,
        description: ""
      },
      {
        name: "Rigueur",
        level: 5,
        description: ""
      },
      {
        name: "Force de proposition",
        level: 5,
        description: ""
      },
      {
        name: "Analyser le besoin",
        level: 5,
        description: ""
      },
      {
        name: "Établir & respecter un cahier des charges",
        level: 4,
        description: ""
      },
      {
        name: "Gestion de projet",
        level: 3,
        description: ""
      }
    ]
  },
  contact: {
    email: "lorenzo@lagoutte.dev",
    phone: "06 24 44 62 70"
  }
});

export const mutations = {}

export const actions = {}

export const getters = {
  getExperiences: (state) => {
    return state.experiences;
  },
  getFormations: (state) => {
    return state.formations;
  },
  getSoftwareSkills: (state) => {
    return sortBy(state.skills.software, ['level']).reverse();
  },
  getOtherSkills: (state) => {
    return sortBy(state.skills.other, ['level']).reverse();
  },
  getContact: (state) => {
    return state.contact;
  }
}
