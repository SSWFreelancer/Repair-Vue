<template>
  <section class="control block graybg">
    <div class="control__container">
      <Title class="control__title">
        Контролируйте ремонт: с первого дня Вы будете в курсе всех процессов
      </Title>
      <div class="control__body">
        <ul class="control__list">
          <li class="control__item">
            <div class="control__item-img">
              <img src="@/assets/images/control/1.png" alt="" />
            </div>
            <p>
              С нашими специалистами вы будете на связи в WhatsApp, Viber,
              Telegram или E-mail
            </p>
          </li>
          <li class="control__item">
            <div class="control__item-img">
              <img src="@/assets/images/control/2.png" alt="" />
            </div>
            <p>Наши мастера будут регулярно присылать вам фото и видео отчет</p>
          </li>
          <li class="control__item">
            <div class="control__item-img">
              <img src="@/assets/images/control/3.png" alt="" />
            </div>
            <p>
              На каждом этапе работы вы получите комментарии от мастера или
              дизайнера
            </p>
          </li>
          <li class="control__item">
            <div class="control__item-img">
              <img src="@/assets/images/control/4.png" alt="" />
            </div>
            <p>
              В любой момент вы можете запросить фото или видео объекта, чтобы
              убедиться в качестве проводимых работ
            </p>
          </li>
        </ul>
        <div class="control__image">
          <img src="@/assets/images/control/main.png" alt="" />
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
export default class Control extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.control {
  &__title {
    margin-bottom: 50px;
    @media (max-width: 940px) {
      margin-bottom: 40px;
    }
  }
  &__body {
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: space-between;
    @media (max-width: 940px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__list {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (max-width: 940px) {
      flex: 0 0 auto;
    }
    @media (max-width: 600px) {
      gap: 30px;
    }
  }
  &__item {
    align-items: center;
    display: flex;
    align-items: center;
    gap: 25px;
    max-width: 610px;
    font-weight: 700;
    font-size: 18px;
    &-img {
      flex: 0 0 42px;
      width: 42px;
      display: flex;
      justify-content: center;
      & img {
        max-width: 100%;
      }
    }
    @media (max-width: 540px) {
      font-size: 16px;
      gap: 15px;
      &-img {
        flex: 0 0 35px;
        width: 35px;
      }
    }
  }
  &__image {
    flex: 0 0 43%;
    & img {
      max-width: 100%;
    }
    @media (max-width: 940px) {
      flex: 0 0 auto;
      max-width: 400px;
      width: 80vw;
    }
  }
}
</style>
