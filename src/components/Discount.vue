<template>
  <div class="discount block yellowbg">
    <div class="discount__container">
      <div class="discount__content">
        <Title class="discount__title">
          Скидки от <span>5% до 20%</span> на ремонт вторичного жилья
        </Title>
        <div class="discount__subtitle">
          Скидка зависит от типа Вашего дома и его расположения
        </div>
      </div>
      <Form2 />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import Form2 from "@/components/Form2.vue";
@Component({
  components: {
    Title,
    Form2,
  },
})
export default class Discount extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.discount {
  &__container {
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 991px) {
      flex-direction: column;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 991px) {
      gap: 30px;
      text-align: center;
    }
  }
  &__title {
    text-wrap: balance;
    & span {
      color: $secondary;
    }
    text-align: left;
    @media (max-width: 991px) {
      text-align: center;
    }
  }
  &__subtitle {
    text-wrap: balance;
    font-size: 24px;
    @media (max-width: 550px) {
      font-size: 18px;
    }
  }
}
</style>
