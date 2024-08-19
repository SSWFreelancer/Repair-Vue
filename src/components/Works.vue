<template>
  <section class="easy">
    <div class="easy__container">
      <Title class="easy__title">Работать с нами - просто!</Title>
      <div class="easy__items">
        <div class="easy__item">
          <div class="easy__count">1</div>
          <div class="easy__text">
            <b>Вы оставляете заявку на сайте</b>
            <span>Наш менеджер перезванивает вам и уточняет детали</span>
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">2</div>
          <div class="easy__text">
            <b>К вам выезжает замерщик</b>
            <span>Расчет стоимости занимает не больше 30 минут</span>
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">3</div>
          <div class="easy__text">
            <b>Заключаем договор</b>
            <span>
              Подписывая договор с нами, вы автоматически получаете гарантию на
              наши услуги до 3-х лет
            </span>
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">4</div>
          <div class="easy__text">
            <b>Выполняем ремонт</b>
            <span>
              Работы ведутся в строгом соответствии с графиком по договору
            </span>
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">5</div>
          <div class="easy__text">
            <b>Сдаём объект</b>
            <span>
              Выполняем генеральную уборку и отдаем полностью законченный объект
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Title from "@/components/Title.vue";
@Component({
  components: {
    Title,
  },
})
export default class Works extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.easy {
  &__title {
    margin-bottom: 45px;
    @media (max-width: 600px) {
      margin-bottom: 25px;
    }
  }
  &__subtitle {
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #818396;
    margin-bottom: 50px;
    text-wrap: balance;
    line-height: 1.5;
    @media (max-width: 600px) {
      margin-bottom: 30px;
      font-size: 16px;
    }
  }
  &__items {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
    @media (max-width: 500px) {
      gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
    }
  }
  &__count {
    font-weight: 700;
    font-size: 64px;
    line-height: 1.1;
    color: $main;
    @media (max-width: 500px) {
      font-size: 48px;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    & span {
      color: #818396;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
}
</style>
