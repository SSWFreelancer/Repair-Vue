<template>
  <main class="main">
    <div class="main__bg">
      <img src="@/assets/images/main/bg.png" alt="" />
    </div>
    <div class="main__container">
      <div class="main__content">
        <h1 class="main__title">
          Ремонт и отделка квартир в Уфе<span> от 2290 ₽/м2</span>
        </h1>
        <div class="main__subtitle">
          Работаем по договору: <br />
          c фиксированной стоимостью и сроками
          <p>
            <span>Берем в работу проекты от 80 000₽</span> <br />
            (не включая материал)
          </p>
        </div>
        <ul class="main__list">
          <li class="main__item">
            <div class="main__icon">
              <img src="@/assets/images/main/1.png" alt="" />
            </div>
            Бесплатный выезд замерщика в день обращения
          </li>
          <li class="main__item">
            <div class="main__icon">
              <img src="@/assets/images/main/2.png" alt="" />
            </div>
            Даем гарантию на свои работы до 3 лет
          </li>
          <li class="main__item">
            <div class="main__icon">
              <img src="@/assets/images/main/3.png" alt="" />
            </div>
            Регулярно присылаем фото и видеоотчет c объекта
          </li>
          <li class="main__item">
            <div class="main__icon">
              <img src="@/assets/images/main/4.png" alt="" />
            </div>
            Бесплатно убираем квартиру после ремонта
          </li>
        </ul>
      </div>
      <Form />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "@/components/Form.vue";
@Component({
  components: {
    Form,
  },
})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.main {
  position: relative;
  padding-top: 160px;
  padding-bottom: 95px;
  @media (max-width: 810px) {
    padding-bottom: 80px;
    padding-top: 130px;
  }
  &__bg {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 30px;
    align-items: center;
    @media (max-width: 970px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 40px;
    @media (max-width: 970px) {
      flex: 0 0 auto;
      gap: 30px;
    }
  }
  &__title {
    text-wrap: balance;
    font-weight: 700;
    font-size: 45px;
    line-height: calc(60 / 45);
    & span {
      color: $secondary;
    }
    @media (max-width: 970px) {
      text-align: center;
      font-size: calc(32px + (65 - 32) * ((100vw - 375px) / (970 - 375)));
    }
  }
  &__subtitle {
    font-weight: 400;
    font-size: 24px;
    line-height: calc(30 / 24);
    & p {
      & span {
        color: $secondary;
        font-weight: 700;
      }
      margin-top: 20px;
    }
    @media (max-width: 970px) {
      text-align: center;
      text-wrap: balance;
    }
    @media (max-width: 640px) {
      font-size: 20px;
      & p {
        margin-top: 15px;
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  &__item {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: calc(20 / 16);
    color: #17152c;
    font-weight: 500;
    gap: 15px;
  }
  &__icon {
    flex: 0 0 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    & img {
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>
