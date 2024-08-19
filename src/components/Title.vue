<template>
  <div class="title">
    <slot>Заголовок</slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Title extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 48px;
  line-height: calc(60 / 48);
  text-align: center;
  color: #17152c;
  @media (max-width: 1023px) {
    font-size: calc(32px + (48 - 32) * ((100vw - 375px) / (1023 - 375)));
  }
}
</style>
