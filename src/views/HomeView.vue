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
    <OtherServices />
    <EconomyWays />
    <div id="aboutcompany" class="block">
      <AboutUs />
      <Masters />
    </div>
    <Discount />
    <Questions />
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
import OtherServices from "@/components/OtherServices.vue";
import EconomyWays from "@/components/EconomyWays.vue";
import AboutUs from "@/components/AboutUs.vue";
import Masters from "@/components/Masters.vue";
import Discount from "@/components/Discount.vue";
import Questions from "@/components/Questions.vue";
@Component({
  components: {
    Main,
    RepairCost,
    Clients,
    Services,
    Control,
    Works,
    OurWorks,
    OtherServices,
    EconomyWays,
    AboutUs,
    Masters,
    Discount,
    Questions,
  },
})
export default class HomeView extends Vue {}
</script>
