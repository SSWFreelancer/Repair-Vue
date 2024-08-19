<template>
  <footer class="footer">
    <div class="footer__container">
      <a href="/" class="footer__logo">
        <img src="@/assets/images/footerlogo.png" alt="" />
      </a>
      <div class="footer__content">
        <span>
          Информация на сайте не является публичной офертой. Вся информация об
          услугах и ценах, предоставленная на сайте, носит исключительно
          информационный характер и ни при каких условиях не является публичной
          офертой
        </span>
        <span>© Чистовой ремонт 2022</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.footer {
  background: #787b8c;
  padding-top: 20px;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
  &__container {
    display: flex;
    gap: 30px;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__logo {
    margin-top: -20px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 13px;
    flex: 1 1 auto;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: #eff3f7;
    & a {
      text-decoration: underline;
      text-underline-position: under;
    }
    @media (max-width: 767px) {
      text-align: center;
    }
  }
}
</style>
