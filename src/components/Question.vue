<template>
  <div
    :class="{ questions__block: true, open: isOpen }"
    @click="toggleQuestion"
  >
    <div class="questions__name">
      <img src="@/assets/images/arrowtop.png" alt="" />
      {{ question }}
    </div>
    <div class="questions__text" :style="questionTextStyle" ref="questionText">
      {{ answer }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Question extends Vue {
  @Prop({ required: true }) answer!: string;
  @Prop({ required: true }) question!: string;

  isOpen = false;
  toggleQuestion() {
    this.isOpen = !this.isOpen;
  }
  get questionTextStyle() {
    const element = this.$refs.questionText as HTMLElement | undefined;
    return {
      maxHeight: this.isOpen && element ? `${element.scrollHeight}px` : "0px",
    };
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.questions {
  &__block {
    cursor: pointer;
    padding: 20px;
    user-select: none;
    background: #ffffff;
    @media (max-width: 700px) {
      padding: 15px 20px;
    }
  }
  &__name {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 24px;
    transition: color 0.3s ease 0s;
    & img {
      transition: transform 0.3s ease 0s;
      width: 20px;
      flex: 0 0 20px;
      transform: rotate(-180deg);
    }
    .questions__block.open & {
      color: $main;
    }
    .questions__block.open & img {
      transform: rotate(0deg);
    }
    @media (max-width: 700px) {
      font-size: 18px;
      & img {
        width: 15px;
        flex: 0 0 15px;
      }
    }
  }
  &__text {
    font-size: 18px;
    line-height: 1.4;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease 0s;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    .questions__block.open & {
      margin-top: 15px;
      pointer-events: auto;
      opacity: 1;
      visibility: visible;
    }
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
}
</style>
