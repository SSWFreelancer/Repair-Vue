<template>
  <div id="app" class="wrapper">
    <AppHeader />
    <div class="page">
      <router-view />
    </div>
    <Popup />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import Popup from "@/components/Popup.vue";
@Component({
  components: {
    AppHeader,
    Popup,
  },
})
export default class App extends Vue {}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
}
</style>
