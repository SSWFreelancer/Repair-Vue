<template>
  <section class="services block">
    <div class="services__container">
      <Title class="services__title">
        Мы бесплатно предоставляем следующие услуги
      </Title>
      <div class="services__items">
        <div class="services__item">
          <div class="services__img">
            <img src="@/assets/images/service/1.png" alt="" />
          </div>
          <div class="services__name">Выезд замерщика и составление сметы</div>
          <div class="services__text">
            Наш инженер проведет все замеры и проконсультирует вас.
            <br />
            <br />В этот же день вы получите от нашего инженера полный расчет и
            подробную смету с учетом ваших пожеланий.
            <br />
            <br />
            Выезд инженера бесплатен и ни к чему вас не обязывает.
          </div>
          <Button @click="openPopup" class="services__btn"
            >Вызвать замерщика</Button
          >
        </div>
        <div class="services__item">
          <div class="services__img">
            <img src="@/assets/images/service/2.png" alt="" />
          </div>
          <div class="services__name">Анализ сметы от других компаний</div>
          <div class="services__text">
            Сомневаетесь в смете, которую Вам составила другая компания?
            <br />
            <br />
            Пришлите её нам!
            <br />
            <br />
            Мы бесплатно проанализируем её и подскажем Вам, какие ошибки и
            недочеты были совершены.
          </div>
          <Button @click="openPopup" class="services__btn"
            >Получить анализ</Button
          >
        </div>
        <div class="services__item">
          <div class="services__img">
            <img src="@/assets/images/service/3.png" alt="" />
          </div>
          <div class="services__name">
            Помощь в подборе и закупке материалов
          </div>
          <div class="services__text">
            Наш прораб бесплатно поедет вместе с вами в магазины, чтобы
            проконсультировать и помочь подобрать все необходимые материалы для
            чернового и чистового ремонта.
          </div>
          <Button @click="openPopup" class="services__btn"
            >Получить консультацию</Button
          >
        </div>
        <div class="services__item">
          <div class="services__img">
            <img src="@/assets/images/service/4.png" alt="" />
          </div>
          <div class="services__name">Экскурсия по нашим объектам</div>
          <div class="services__text">
            Убедитесь лично в высоком качестве нашей работы!
            <br />
            <br />
            Приглашаем вас посмотреть квартиры, которые находятся в процессе
            ремонта.
            <br />
            <br />
            Мы пришлем за вами автомобиль в удобное время и наш главный инженер
            проведет для вас экскурсию на объекте.
          </div>
          <Button @click="openPopup" class="services__btn"
            >Записаться на экскурсию</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Button from "./Button.vue";
import Title from "./Title.vue";
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
export default class Services extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.services {
  &__title {
    margin-bottom: 40px;
    @media (max-width: 600px) {
      margin-bottom: 30px;
    }
  }
  &__name {
    font-weight: 700;
    font-size: 18px;
  }
  &__items {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    row-gap: 40px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &__img {
    width: 100%;
    height: 180px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__text {
    font-size: 16px;
    color: #818396;
  }
  &__btn {
    margin-top: auto;
    padding: 10px 8px;
  }
}
</style>
