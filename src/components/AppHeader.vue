<template>
  <header :class="{ header: true, scroll: isScrolled }">
    <div class="header__container">
      <a href="#" class="header__logo">
        <img src="@/assets/images/main/logo.png" alt="" />
      </a>
      <nav :class="{ menu: true, active: burger }">
        <ul class="menu__list">
          <li class="menu__item">
            <a @click="toggleBurger" href="#cost" class="menu__link"> Цены </a>
          </li>
          <li class="menu__item">
            <a @click="toggleBurger" href="#projects" class="menu__link">
              Проекты
            </a>
          </li>
          <li class="menu__item">
            <a @click="toggleBurger" href="#aboutcompany" class="menu__link">
              О нас
            </a>
          </li>
          <li class="menu__item">
            <a @click="toggleBurger" href="#contacts" class="menu__link">
              Контакты
            </a>
          </li>
        </ul>
        <Button @click="openPopup" class="menu__btn">Бесплатный замер</Button>
      </nav>
      <Button class="header__btn" @click="openPopup">Бесплатный замер</Button>
      <div class="header__actions">
        <a href="tel:73471234567" class="header__tel">
          <span>+7 (347) 123-45-67</span>
          <img src="@/assets/images/main/call.svg" alt="" />
        </a>
        <a href="#" class="header__call" @click="openPopup">
          Заказать звонок
        </a>
        <a href="#" class="header__time"> Ежедневно 08:00-22:00 </a>
      </div>
      <div
        @click="toggleBurger"
        :class="{ header__burger: true, active: burger }"
      >
        <span></span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 16;
  transition: all 0.3s ease 0s;
  &.scroll {
    background: $main;
  }
  &:after {
    content: "";
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    background-color: $main;
    z-index: 7;
    display: none;
    transition: all 0.3s ease 0s;
    @media (max-width: 1023px) {
      display: block;
      body.lock & {
        pointer-events: auto;
        opacity: 1;
        visibility: visible;
        left: 0;
      }
    }
  }
  &__container {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    position: relative;
    z-index: 8;
    background: $main;
    width: 190px;
    flex: 0 0 190px;
    height: 102px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.3s ease 0s;
    .header.scroll & {
      height: 90px;
    }
    @media (max-width: 810px) {
      height: 90px;
      .header.scroll & {
        height: 80px;
      }
    }
    @media (max-width: 610px) {
      width: 150px;
      height: 80px;
      flex: 0 0 150px;
      .header.scroll & {
        height: 60px;
      }
    }
  }
  &__btn {
    @media (max-width: 610px) {
      display: none;
    }
  }
  &__actions {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;
    z-index: 8;
    @media (max-width: 810px) {
      flex: 0 0 25px;
      width: 25px;
      display: block;
    }
    @media (max-width: 610px) {
      margin-left: auto;
      margin-right: 10px;
    }
  }
  &__tel {
    font-weight: 700;
    font-size: 18px;
    line-height: calc(22 / 18);
    color: $secondary;
    & img {
      display: none;
    }
    @media (max-width: 810px) {
      & span {
        display: none;
      }
      & img {
        display: block;
        width: 100%;
      }
    }
  }
  &__call {
    font-weight: 700;
    font-size: 16px;
    line-height: calc(20 / 16);
    text-decoration: underline;
    color: #17152c;
    margin-bottom: 4px;
    transition: all 0.3s ease 0s;
    @media (any-hover: hover) {
      &:hover {
        text-decoration: none;
        color: $secondary;
      }
    }
    @media (max-width: 810px) {
      display: none;
    }
  }
  &__time {
    font-size: 14px;
    line-height: calc(17 / 14);
    color: #818396;
    @media (max-width: 810px) {
      display: none;
    }
  }
  &__burger {
    cursor: pointer;
    display: none;
    @media (max-width: 1023px) {
      position: relative;
      display: block;
      width: 30px;
      flex: 0 0 30px;
      height: 20px;
      z-index: 8;
      & span {
        position: absolute;
        background-color: #17152c;
        left: 0;
        width: 30px;
        height: 2px;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s ease 0s;
      }
      &:before,
      &:after {
        content: "";
        background-color: #17152c;
        position: absolute;
        width: 30px;
        height: 2px;
        left: 0;
        -webkit-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
      }
      &:before {
        top: 0;
      }
      &:after {
        bottom: 0;
      }
      &.active span {
        transform: scale(0);
      }
      &.active:before {
        transform: rotate(45deg);
        top: 9px;
      }
      &.active:after {
        transform: rotate(-45deg);
        bottom: 9px;
      }
    }
  }
}
.menu {
  &__btn {
    display: none;
  }
  &__list {
    display: flex;
    align-items: center;
    gap: 35px;
    @media (max-width: 1100px) {
      gap: 20px;
    }
  }
  &__link {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #17152c;
    transition: all 0.3s ease 0s;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      width: 0;
      bottom: -4px;
      height: 2px;
      background: $main;
      transition: all 0.3s ease 0s;
    }
    @media (any-hover: hover) {
      &:hover {
        color: $main;
        &:after {
          width: 100%;
          left: 0;
        }
      }
    }
    .header.scroll & {
      &:hover {
        color: $secondary;
      }
      &:after {
        background: $secondary;
      }
    }
  }
  @media (max-width: 1023px) {
    overflow: auto;
    transition: all 0.3s ease 0s;
    position: absolute;
    z-index: 6;
    top: 0px;
    left: -100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100vh;
    background-color: $main;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    padding: 120px 15px 60px;
    @media (max-width: 610px) {
      padding-top: 110px;
    }
    &.active {
      left: 0;
      pointer-events: auto;
      opacity: 1;
      visibility: visible;
    }
    &__btn {
      color: #fff;
      margin-top: auto;
      background-color: $secondary;
      display: block;
    }
    &__list {
      width: 100%;
      text-align: center;
      flex-direction: column;
      gap: 30px;
    }
    &__link {
      font-size: 22px;
      color: #17152c;
      &:after {
        display: none;
      }
    }
  }
}
</style>

<script lang="ts">
import Button from "@/components/Button.vue";
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
@Component({
  components: {
    Button,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class AppHeader extends Vue {
  isScrolled = false;

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  burger = false;
  toggleBurger() {
    this.burger = !this.burger;
    if (this.burger) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }
}
</script>
