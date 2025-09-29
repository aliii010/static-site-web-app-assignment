import { defineClientConfig } from "@vuepress/client";
import ProgrammingLanguages from "./components/TechsComponents/ProgrammingLanguages.vue";
import Frameworks from "./components/TechsComponents/Frameworks.vue";
import Project from "./components/ProjectComponents/Project.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Project", Project);
    app.component("Frameworks", Frameworks);
    app.component("ProgrammingLanguages", ProgrammingLanguages);
  },
});
