import { defineStore } from "pinia";

export const useProjectStore = defineStore({
  id: "projects",
  state: () => ({
    projects: [
      {
        projectTitle: "Blogger",
        projectDesc: "",
        imgName: "",
        stack: "",
        gitHub: "",
        web: "",
      },
      {
        Name: "Movie Web App",
        projectDesc: "",
        imgName: "",
        stack: "",
        gitHub: "",
        web: "",
      },
      {
        Name: "Tunes",
        projectDesc: "",
        imgName: "",
        stack: "",
        gitHub: "",
        web: "",
      },
      {
        Name: "Talk to Mat",
        projectDesc: "",
        imgName: "",
        stack: "",
        gitHub: "",
        web: "",
      },
      {
        Name: "Weight Tracker",
        projectDesc: "",
        imgName: "",
        stack: "",
        gitHub: "",
        web: "",
      },
    ],
  }),
});
