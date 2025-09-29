<template>
  <div class="tech-list">
    <div
      v-for="(tech, index) in framework"
      :key="index"
      class="tech-item"
      :title="tech.name"
    >
      <ul>
        <li>
          <strong>{{ tech.name }}</strong
          >({{ tech.programmingLanguage }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Techs from "../../data/techs.json";

export default {
  data() {
    const framework = Techs.filter((tech) => tech.category === "Framework");
    return {
      framework,
    };
  },
};
</script>
