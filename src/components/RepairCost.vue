<template>
  <section id="cost" class="cost block graybg">
    <div class="cost__container">
      <Title>Стоимость ремонта</Title>
      <div class="cost__subtitle">
        Берем в работу проекты от 80 000 ₽ (не включая материал)
      </div>
      <div class="cost__wrapper">
        <nav class="cost__nav">
          <a
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
            >{{ tab.name }}
          </a>
        </nav>
        <div v-if="activeTab === 0" class="cost__block">
          <div class="cost__image">
            <img src="@/assets/images/cost/1.jpeg" alt="" />
          </div>
          <div class="cost__column">
            <div class="cost__header">
              <p>Капитальный</p>
              <p>от 7 дней</p>
            </div>
            <div class="cost__name">Стены</div>
            <ul class="cost__list">
              <li class="cost__link">Грунтовка поверхности</li>
              <li class="cost__link">Поклейка обоев</li>
              <li class="cost__link">Покраска стен</li>
              <li class="cost__link">Устранение мелких дефектов</li>
            </ul>
            <div class="cost__name">Пол</div>
            <ul class="cost__list">
              <li class="cost__link">Демонтаж старого покрытия</li>
              <li class="cost__link">Укладка подложки</li>
              <li class="cost__link">Монтаж напольного покрытия</li>
            </ul>
            <div class="cost__name">Ванная</div>
            <ul class="cost__list">
              <li class="cost__link">Замена сантехники</li>
            </ul>
            <div class="cost__name">Потолок</div>
            <ul class="tabs__list">
              <li class="cost__link">Шпаклевка</li>
              <li class="cost__link">Покраска потолка</li>
              <li class="cost__link">Монтаж натяжного потолка</li>
            </ul>
          </div>
          <div class="cost__column">
            <div class="cost__header hidden">
              <p>Капитальный</p>
              <p>от 7 дней</p>
            </div>
            <div class="cost__name">
              Чистовые материалы <b>от 1 590 ₽/м2</b>
            </div>
            <ul class="cost__list">
              <li class="cost__link">Декоративные элементы</li>
              <li class="cost__link">Лакокрасочные материалы</li>
              <li class="cost__link">Напольные покрытия</li>
              <li class="cost__link">Реечный и натяжной потолок</li>
              <li class="cost__link">Стеновые материалы</li>
            </ul>
            <div class="cost__name">Черновые материалы <b>от 700 ₽/м2</b></div>
            <ul class="cost__list">
              <li class="cost__link">Гипсокартон и профили</li>
              <li class="cost__link">Провода и трубы</li>
              <li class="cost__link">Строительные смеси</li>
            </ul>
            <div class="cost__cost">
              <p>Стоимость работ</p>
              <span>от 2 290 ₽/м2</span>
            </div>
            <Button @click="openPopup">Заказать</Button>
          </div>
        </div>
        <div v-else-if="activeTab === 1" class="cost__block">
          <div class="cost__image">
            <img src="@/assets/images/cost/2.jpg" alt="" />
          </div>
          <div class="cost__column">
            <div class="cost__header">
              <p>Дизайнерский</p>
              <p>от 6 дней</p>
            </div>
            <div class="cost__name">Стены</div>
            <ul class="cost__list">
              <li class="cost__link">Поклейка обоев</li>
              <li class="cost__link">Покраска стен</li>
            </ul>
            <div class="cost__name">Пол</div>
            <ul class="cost__list">
              <li class="cost__link">Демонтаж старого покрытия</li>
              <li class="cost__link">Укладка подложки</li>
              <li class="cost__link">Монтаж напольного покрытия</li>
            </ul>
            <div class="cost__name">Ванная</div>
            <ul class="cost__list">
              <li class="cost__link">Замена сантехники</li>
            </ul>
            <div class="cost__name">Потолок</div>
            <ul class="tabs__list">
              <li class="cost__link">Шпаклевка</li>
              <li class="cost__link">Покраска потолка</li>
              <li class="cost__link">Монтаж натяжного потолка</li>
            </ul>
          </div>
          <div class="cost__column">
            <div class="cost__header hidden">
              <p>Дизайнерский</p>
              <p>от 6 дней</p>
            </div>
            <div class="cost__name">
              Чистовые материалы <b>от 1 590 ₽/м2</b>
            </div>
            <ul class="cost__list">
              <li class="cost__link">Декоративные элементы</li>
              <li class="cost__link">Лакокрасочные материалы</li>
              <li class="cost__link">Напольные покрытия</li>
              <li class="cost__link">Реечный и натяжной потолок</li>
              <li class="cost__link">Стеновые материалы</li>
            </ul>
            <div class="cost__name">Черновые материалы <b>от 700 ₽/м2</b></div>
            <ul class="cost__list">
              <li class="cost__link">Гипсокартон и профили</li>
              <li class="cost__link">Провода и трубы</li>
              <li class="cost__link">Строительные смеси</li>
            </ul>
            <div class="cost__cost">
              <p>Стоимость работ</p>
              <span>от 2 290 ₽/м2</span>
            </div>
            <Button @click="openPopup">Заказать</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Title from "@/components/Title.vue";
import { mapActions } from "vuex";

@Component({
  components: {
    Button,
    Title,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class RepairCost extends Vue {
  activeTab = 0;
  tabs = [{ name: "Капитальный" }, { name: "Дизайнерский" }];
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.cost {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 35px;
    @media (max-width: 767px) {
      gap: 20px;
    }
  }
  &__subtitle {
    font-size: 18px;
    text-align: center;
    color: #818396;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 50px;
    margin: 0 auto;
    max-width: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 20px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 18px;
    & a {
      cursor: pointer;
      text-align: center;
      transition: all 0.3s ease 0s;
      position: relative;
      &:after {
        content: "";
        width: 0;
        transition: all 0.3s ease 0s;
        height: 2px;
        position: absolute;
        left: 50%;
        bottom: -12px;
        background-color: $main;
      }
      @media (any-hover: hover) {
        &:hover {
          color: $main;
          &:after {
            left: 0;
            width: 100%;
          }
        }
      }
      &.active {
        &:after {
          left: 0;
          width: 100%;
        }
        color: $main;
      }
    }
    @media (max-width: 767px) {
      padding-bottom: 20px;
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
  &__block {
    background: #ffffff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  &__image {
    height: 600px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease 0s;
    }
    transform: translateZ(0);
    overflow: hidden;
    @media (any-hover: hover) {
      &:hover img {
        transform: scale(1.1);
      }
    }
    @media (max-width: 1100px) {
      height: calc(300px + (600 - 300) * ((100vw - 320px) / (1100 - 320)));
      grid-column: -1/1;
    }
  }
  &__column {
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-right: 1px solid #e9edf3;
    &:last-child {
      border-right: none;
    }
    @media (max-width: 767px) {
      padding: 20px;
      border: none;
      padding-bottom: 0;
      &:last-child {
        padding-bottom: 20px;
      }
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #17152c;
    margin-bottom: 19px;
    &.hidden {
      opacity: 0;
      visibility: hidden;
      @media (max-width: 767px) {
        display: none;
      }
    }
    @media (max-width: 349px) {
      flex-direction: column;
    }
  }
  &__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__link {
    padding-left: 17px;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    color: #818396;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 6px;
      height: 6px;
      background: $main;
      transform: translate(0, -50%) rotate(45deg);
    }
  }
  &__cost {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.3;
    text-align: center;
    margin-top: auto;
    padding-top: 20px;
    & span {
      color: $secondary;
      margin-top: 3px;
    }
  }
  & .button {
    margin-top: 20px;
  }
}
</style>
