<template>
  <section class="costs block graybg">
    <div class="costs__container">
      <Title class="costs__title">Цены на отдельные виды услуг</Title>
      <div class="costs__content">
        <ul class="costs__list">
          <li class="costs__item-title">Черновые отделочные работы</li>
          <li class="costs__item">Грунтовка пола - от 60 руб/м2</li>
          <li class="costs__item">Грунтовка стен - от 65 руб/м2</li>
          <li class="costs__item">
            Зачистка стен (краска, шпатлевка) - от 180 руб/м2
          </li>
          <li class="costs__item">Штукатурка потолка - от 620 руб/м2</li>
          <li class="costs__item">Грунтовка потолка - от 85 руб/м2</li>
        </ul>
        <ul class="costs__list">
          <li class="costs__item-title">Чистовые отделочные работы</li>
          <li class="costs__item">Укладка ламината - от 490 руб/м2</li>
          <li class="costs__item">Окраска стен - от 240 руб/м2</li>
          <li class="costs__item">Облицовка плиткой стен - от 1250 руб/м2</li>
          <li class="costs__item">Оклейка стен обоями - от 390 руб/м2</li>
          <li class="costs__item">
            Укладка паркетной доски и подложки - от 770 руб/м2
          </li>
        </ul>
        <ul class="costs__list">
          <li class="costs__item-title">Электромонтажные работы</li>
          <li class="costs__item">
            Установка TV, телефонной, интернет точки - от 270 руб
          </li>
          <li class="costs__item">
            Монтаж распаечной коробки с комутацией - от 400 руб/шт
          </li>
          <li class="costs__item">Установка электроточки - от 245 руб/шт</li>
          <li class="costs__item">
            Установка и подключение Диф Автомата - от 590 руб/шт
          </li>
        </ul>
        <ul class="costs__list">
          <li class="costs__item-title">Сантехнические работы</li>
          <li class="costs__item">
            Монтаж и подключение умывальника - от 1095 руб/шт
          </li>
          <li class="costs__item">
            Монтаж и подключение унитаза - от 1030 руб/шт
          </li>
          <li class="costs__item">Установка ванны - от 3500 руб/шт</li>
          <li class="costs__item">
            Монтаж и подключение водонагревателя - от 2100 руб
          </li>
        </ul>
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
export default class OtherServices extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.costs {
  &__title {
    margin-bottom: 60px;
    @media (max-width: 835px) {
      margin-bottom: 35px;
    }
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 30px;
    row-gap: 50px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      row-gap: 0;
      gap: 30px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__item-title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 5px;
  }
  &__item {
    font-weight: 400;
    font-size: 16px;
    color: #818396;
    padding-left: 17px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 6px;
      height: 6px;
      background: $main;
      transform: translate(0, -70%) rotate(45deg);
    }
  }
}
</style>
