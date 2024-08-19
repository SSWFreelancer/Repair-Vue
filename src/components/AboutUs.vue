<template>
  <section class="easy">
    <div class="easy__container">
      <Title class="easy__title">О нас</Title>
      <div class="easy__subtitle">
        Работаем с 2017 года. За это время сдали более 537 объектов.
        <br />
        Среди наших работ были как маленькие квартиры-студии так и большие
        коттеджи.
      </div>
      <div class="easy__items">
        <div class="easy__item">
          <div class="easy__count">1</div>
          <div class="easy__text">
            В договоре фиксируем все гарантии, смету и сроки
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">2</div>
          <div class="easy__text">
            В штате только высококлассные мастера. У нас работают специалисты с
            опытом от 6 лет
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">3</div>
          <div class="easy__text">
            Заранее согласовываем с вами план работ и сроки. В случае задержки –
            выплатим неустойку за просроченные дни
          </div>
        </div>
        <div class="easy__item">
          <div class="easy__count">4</div>
          <div class="easy__text">Каждому клиенту подарок на выбор</div>
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
export default class AboutUs extends Vue {}
</script>
