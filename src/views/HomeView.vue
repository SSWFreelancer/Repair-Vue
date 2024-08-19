<template>
  <div class="home">
    <Main />
    <RepairCost />
    <Clients />
    <Services />
    <Control />
    <div class="block">
      <Works />
      <OurWorks />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from "@/components/Main.vue";
import RepairCost from "@/components/RepairCost.vue";
import Clients from "@/components/Clients.vue";
import Services from "@/components/Services.vue";
import Control from "@/components/Control.vue";
import Works from "@/components/Works.vue";
import OurWorks from "@/components/OurWorks.vue";
@Component({
  components: {
    Main,
    RepairCost,
    Clients,
    Services,
    Control,
    Works,
    OurWorks,
  },
})
export default class HomeView extends Vue {}
</script>
