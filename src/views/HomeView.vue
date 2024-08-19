<template>
  <div class="home">
    <Main />
    <RepairCost />
    <Clients />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@/components/Main.vue";
import RepairCost from "@/components/RepairCost.vue";
import Clients from "@/components/Clients.vue";

@Component({
  components: {
    Main,
    RepairCost,
    Clients,
  },
})
export default class HomeView extends Vue {}
</script>
