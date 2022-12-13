import { defineStore } from "pinia";

export const useProjectStore = defineStore({
  id: "projects",
  state: () => ({
    projects: [
      {
        Name: "Blogger",
        projectDesc:
          "Blogging web app that lets users create an account, read and write blogs",
        imgName: "blogger.png",
        stack: "Vue, Tailwind, Supabase, MarkedJS",
        gitHub: "https://github.com/Kroplewski-M/Blogger",
        web: "https://rainbow-tarsier-75c44f.netlify.app/",
      },
      {
        Name: "CineMax",
        projectDesc:
          "Movie web app, allows users to see trending/upcoming movies or search for a movie",
        imgName: "cinemax.png",
        stack: "Vue, Tailwind, TMDB",
        gitHub: "https://github.com/Kroplewski-M/movie-app",
        web: "https://cute-bombolone-ac756e.netlify.app/",
      },
      {
        Name: "Tunes",
        projectDesc: "Simple music player that allows users to play tracks",
        imgName: "tunes.png",
        stack: "Vue, Tailwind",
        gitHub: "https://github.com/Kroplewski-M/simple-music-app",
        web: "https://sparkly-muffin-0d78ef.netlify.app/",
      },
      {
        Name: "Talk to Mat",
        projectDesc:
          "User can register or login to an account, then gets put into a group chat with all other users letting them talk to each other.",
        imgName: "talkToMat.png",
        stack: "PHP, Tailwind, JS",
        gitHub: "https://github.com/Kroplewski-M/Talk-To-Mat",
        web: "",
      },
      {
        Name: "Weight Tracker",
        projectDesc:
          "Weight tracking web app that tracks the date and weight for users",
        imgName: "weightTracker.png",
        stack: "Vue, Tailwind",
        gitHub: "https://github.com/Kroplewski-M/weight-tracking",
        web: "https://eloquent-daffodil-ecafbc.netlify.app/",
      },
    ],
  }),
});
