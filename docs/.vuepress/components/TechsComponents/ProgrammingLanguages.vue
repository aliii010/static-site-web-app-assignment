<template>
  <div class="tech-list">
    <div
      v-for="(tech, index) in pl"
      :key="index"
      class="tech-item"
      :title="tech.name"
    >
      <ul>
        <li>
          {{ tech.logo }}
          <strong>{{ tech.name }}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Techs from "../../data/Techs.json";

export default {
  data() {
    const pl = Techs.filter((tech) => tech.category === "Programming Language");
    console.log(pl);
    return {
      pl,
    };
  },
};
</script>
