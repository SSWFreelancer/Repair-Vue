<template>
  <div id="app" class="wrapper">
    <AppHeader />
    <div class="page">
      <router-view />
    </div>
    <Contacts />
    <Footer />
    <Popup />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import Popup from "@/components/Popup.vue";
import Contacts from "@/components/Contacts.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    AppHeader,
    Popup,
    Footer,
    Contacts,
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
.page {
  flex: 1 1 auto;
}
</style>
