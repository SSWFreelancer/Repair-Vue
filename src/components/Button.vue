<template>
  <button @click="handleClick" class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Button extends Vue {
  handleClick(event: Event) {
    this.$emit("click", event);
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.button {
  padding: 10px 22px;
  background: $main;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(20 / 16);
  text-align: center;
  color: #17152c;
  transition: all 0.3s ease 0s;
  &-secondary {
    background-color: $secondary;
    color: #fff;
  }
  @media (any-hover: hover) {
    &:hover {
      box-shadow: 0px 0px 10px rgba(255, 184, 0, 0.7);
    }
    &-secondary {
      &:hover {
        box-shadow: 0px 0px 6px rgba(255, 0, 92, 0.5);
      }
    }
  }
  .header.scroll & {
    background-color: $secondary;
    color: #ffffff;
    @media (any-hover: hover) {
      &:hover {
        box-shadow: 0px 0px 6px rgba(255, 0, 92, 0.5);
      }
    }
  }
}
</style>
