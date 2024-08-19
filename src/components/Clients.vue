<template>
  <section class="clients block yellowbg">
    <div class="clients__container">
      <Title class="clients__title">За что клиенты нас рекомендуют</Title>
      <div class="clients__items">
        <div class="clients__item">
          <div class="clients__icon">
            <img src="@/assets/images/clients/1.svg" alt="" />
          </div>
          <div class="clients__name">Работаем оперативно и точно в срок</div>
          <div class="clients__text">
            Оставьте заявку на бесплатный вызов замерщика и он приедет уже
            завтра! Готовы начать ремонт через 1 день после подписания договора
          </div>
        </div>
        <div class="clients__item">
          <div class="clients__icon">
            <img src="@/assets/images/clients/2.svg" alt="" />
          </div>
          <div class="clients__name">
            Точный расчет материалов - Вы не платите за остатки
          </div>
          <div class="clients__text">
            Производим точный расчет материалов и не оставляем остатков. Если
            остатки остались - мы их выкупаем
          </div>
        </div>
        <div class="clients__item">
          <div class="clients__icon">
            <img src="@/assets/images/clients/3.svg" alt="" />
          </div>
          <div class="clients__name">
            Экономим Вам до 15% от стоимости материалов
          </div>
          <div class="clients__text">
            Мы закупаем материалы напрямую у производителя по оптовым скидкам
          </div>
        </div>
        <div class="clients__item">
          <div class="clients__icon">
            <img src="@/assets/images/clients/4.svg" alt="" />
          </div>
          <div class="clients__name">Бесплатно убираем мусор</div>
          <div class="clients__text">
            Наши мастера сами уберут весь мусор и сделают генеральную уборку.
            При въезде вы получите чистую квартиру
          </div>
        </div>
        <div class="clients__item">
          <div class="clients__icon">
            <img src="@/assets/images/clients/5.svg" alt="" />
          </div>
          <div class="clients__name">Оплата после приемки работ</div>
          <div class="clients__text">
            Вы платите за каждый этап работы после подписания акта
          </div>
        </div>
        <div class="clients__item">
          <div class="clients__icon">
            <img src="@/assets/images/clients/6.svg" alt="" />
          </div>
          <div class="clients__name">Гарантия 3 года на наши услуги</div>
          <div class="clients__text">
            Даем гарантию на все виды работ: строительно-монтажные. отделочные,
            электрика, чистовые, сантехнические
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
export default class Clients extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.clients {
  &__title {
    margin-bottom: 60px;
    @media (max-width: 1023px) {
      margin-bottom: 50px;
    }
    @media (max-width: 600px) {
      margin-bottom: 40px;
    }
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 30px;
    row-gap: 80px;
    @media (max-width: 1023px) {
      row-gap: 40px;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__icon {
    height: 45px;
    width: 45px;
    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__name {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
  &__text {
    font-size: 18px;
    line-height: 1.3;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
}
</style>
