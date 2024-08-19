<template>
  <section class="ways block yellowbg">
    <img src="@/assets/images/ways/1.png" alt="" />
    <div class="ways__container">
      <Title class="ways__title">
        Хотите узнать 7 способов как сэкономить на ремонте до <span>30%</span>
        ?
      </Title>
      <div class="ways__subtitle">
        Укажите дату, когда вы планируете проводить ремонт и мы пришлем вам
        специальное предложение
      </div>
      <Button @click="openPopup" class="button-secondary">
        Получить чек-лист
      </Button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
export default class Ways extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.ways {
  position: relative;
  & > img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 35%;
    z-index: 0;
    @media (max-width: 991px) {
      display: none;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;
  }
  &__title {
    max-width: 80%;
    margin: 0 auto 60px;
    @media (max-width: 991px) {
      max-width: 100%;
      margin-bottom: 35px;
    }
    & span {
      color: $secondary;
    }
  }
  &__subtitle {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    max-width: 80%;
    margin: 0 auto 60px;
    @media (max-width: 991px) {
      max-width: 100%;
      font-size: 22px;
      margin-bottom: 35px;
    }
  }
  & .button {
    align-self: center;
    width: 100%;
    max-width: 300px;
  }
}
</style>
