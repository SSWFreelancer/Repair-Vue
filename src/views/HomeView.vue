<template>
  <div class="home">
    <Main />
    <RepairCost />
  </div>
</template>
<style></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@/components/Main.vue";
import RepairCost from "@/components/RepairCost.vue";
@Component({
  components: {
    Main,
    RepairCost,
  },
})
export default class HomeView extends Vue {}
</script>
