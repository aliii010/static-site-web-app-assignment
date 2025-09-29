<template>
  <div v-for="(project, index) in projects" :key="index" class="project">
    <h3>{{ project.title }}</h3>

    <p>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.shields.io/badge/Code-000?logo=github&logoColor=white"
          alt="GitHub"
        />
      </a>
    </p>

    <p>
      {{ project.description }}
    </p>

    <p><strong>Tech stack:</strong></p>
    <p v-for="tech in project.technologies" :key="tech">
      <code>{{ tech }}</code> ·
    </p>
  </div>
</template>

<script>
import Projects from "../../data/projects.json";
console.log("hlelowjfdkl;adj");

export default {
  data() {
    const projects = Projects;
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.project {
  margin-bottom: 2rem;
}
.project img {
  max-width: 100%;
  margin: 1rem 0;
}
</style>
