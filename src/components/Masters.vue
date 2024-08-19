<template>
  <section class="masters">
    <div class="masters__container">
      <Title class="masters__title">
        Вашим ремонтом будут заниматься опытные мастера
      </Title>
      <div class="masters__items">
        <div class="masters__item">
          <div class="masters__img">
            <img src="@/assets/images/masters/1.png" alt="" />
          </div>
          <div class="masters__name">Александр</div>
          <div class="masters__info">Сметчик-замерщик</div>
          <div class="masters__text">
            Определяет стоимость строительство и помогает клиентам
            минимизировать затраты на ремонт и материалы
          </div>
        </div>
        <div class="masters__item">
          <div class="masters__img">
            <img src="@/assets/images/masters/2.png" alt="" />
          </div>
          <div class="masters__name">Руслан</div>
          <div class="masters__info">Управляющий</div>
          <div class="masters__text">
            Контроль качества оказываемых услуг, взаимодействие с персоналом
          </div>
        </div>
        <div class="masters__item">
          <div class="masters__img">
            <img src="@/assets/images/masters/3.png" alt="" />
          </div>
          <div class="masters__name">Владимир</div>
          <div class="masters__info">Плиточник</div>
          <div class="masters__text">
            Подготавливает поверхность стен. Проектирует схему раскладки плитки.
            Укладывает плитку по утвержденной схеме. Затирает швы, монтирует
            скрытые люки
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
export default class Masters extends Vue {}
</script>

<style lang="scss" scoped>
.masters {
  &__title {
    margin-bottom: 55px;
    @media (max-width: 700px) {
      margin-bottom: 25px;
    }
  }
  &__items {
    display: grid;
    gap: 25px;
    row-gap: 35px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__img {
    width: 100%;
    overflow: hidden;
    height: 350px;
    @media (max-width: 380px) {
      height: calc(290px + (350 - 290) * ((100vw - 320px) / (380 - 320)));
    }
    & img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      transition: all 0.3s ease 0s;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
  &__name {
    margin-top: 10px;
    font-weight: 700;
    font-size: 18px;
  }
  &__info {
    font-size: 16px;
  }
  &__text {
    font-size: 16px;
    color: #818396;
  }
}
</style>
