<template>
  <div id="contacts" class="contacts">
    <div class="contacts__container">
      <div class="contacts__body">
        <div class="contacts__title">Контакты</div>
        <a href="tel:83471234567" class="contacts__number"> 8 347 123 45 67 </a>
        <div class="contacts__info">
          <p>г. Уфа, ул. Бикбая, д. 44a</p>
          <a href="mailto:adress@mail.ru">adress@mail.ru</a>
        </div>
      </div>
    </div>
    <div class="contacts__map">
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=56.060777%2C54.761629&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMTQxODY2MjU3EnHQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwg0KPRhNCwLCDRg9C70LjRhtCwINCR0LDRj9C30LjRgtCwINCR0LjQutCx0LDRjywgNDTQkCIKDdtFYEIVowtbQg%2C%2C&z=14.88"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Contacts extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.contacts {
  position: relative;
  @media (max-width: 1023px) {
    display: flex;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
  &__map {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    & iframe {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1023px) {
      flex: 0 0 50%;
      width: 50%;
      height: auto;
      position: static;
    }
    @media (max-width: 767px) {
      width: 100%;
      flex: 0 0 auto;
      height: 500px;
    }
    @media (max-width: 500px) {
      height: calc(320px + (500 - 320) * ((100vw - 320px) / (500 - 320)));
    }
  }
  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;
    padding: 72px 15px;
    @media (max-width: 1023px) {
      width: 50%;
      flex: 0 0 50%;
      align-items: stretch;
      padding: 0;
    }
    @media (max-width: 767px) {
      width: 100%;
      flex: 0 0 auto;
    }
  }
  &__body {
    pointer-events: all;
    padding: 50px;
    background: #eff3f6;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1023px) {
      padding-bottom: 120px;
    }
    @media (max-width: 767px) {
      padding: 50px 15px;
    }
  }
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: calc(44 / 36);
    margin-bottom: 10px;
  }
  &__number {
    font-weight: 700;
    font-size: 24px;
    line-height: cakc(30/24);
    color: $secondary;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(22 / 18);
    & a {
      color: inherit;
      text-decoration: underline;
    }
  }
}
</style>
