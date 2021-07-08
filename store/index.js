import sortBy from "lodash.sortby";

export const state = () => ({
  experiences: [
    {
      job: "Stage",
      date: "Juin 2018",
      company: "Explotation des sources Roxane",
      places: "La Ferrière-Bochard (61)",
      description: "- Développement Web" +
        "- Déploiement de serveur"
    },
    {
      job: "Equipier polyvalent",
      date: "2017 - 2018",
      company: "McDonald's",
      places: "Arçonnay (72)"
    },
    {
      job: "Manager (Responsable de zone)",
      date: "2018 - 2019",
      company: "McDonald's",
      places: "Arçonnay (72)",
    },
    {
      job: "Développeur junior",
      date: "2019 - 2021",
      company: "Mano",
      places: "Le Mans (72)",
      description: ""
    }
  ],
  formations: [
    {
      title: "Baccalauréat technologique (Sciences et technologies de l'industrie et du développement durable) option SIN (Systèmes d'information et numérique)",
      institution: "Lycée Alain",
      date: "2015 - 2017",
      places: "Alençon (61)"
    },
    {
      title: "Fondamentaux du leadership de niveau 1",
      institution: "McDonald's France",
      date: "Février 2019",
      places: "Guyancourt (78)"
    },
    {
      title: "BTS Numériques option informatique et réseaux",
      institution: "Insitution Immaculée Conception",
      date: "2017 - 2019",
      places: "Laval (53)"
    },
    {
      title: "Responsable en ingénierie des logiciels",
      institution: "CESI",
      date: "Depuis 2019",
      places: "Le Mans (72)",
      description: "Pas encore obtenu"
    }
  ],
  skills: {
    software: [
      {
        name: "HTML & CSS",
        level: 10
      },
      {
        name: "Javascript",
        level: 9,
        description: ""
      },
      {
        name: "Vue Js",
        level: 9,
        description: ""
      },
      {
        name: "Nuxt Js",
        level: 9,
        description: ""
      },
      {
        name: "PHP",
        level: 9,
        description: ""
      },
      {
        name: "SQL",
        level: 7,
        description: ""
      },
      {
        name: "Linux & Windows",
        level: 8,
        description: "Bonne maîtrise de ces deux système d'exploitation"
      },
      {
        name: "C/C++",
        level: 8,
        description: ""
      },
      {
        name: "C#",
        level: 6,
        description: ""
      },
      {
        name: "Suite Microsoft Office",
        level: 8,
        description: ""
      }
    ],
    other: []
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
    return sortBy(state.skills.software, ['level']);
  }
}
