<template>
  <form class="form">
    <div class="form__title">
      Рассчитайте стоимость ремонта и получите смету
    </div>
    <div class="form__text">
      Заполните Ваши контактные данные, чтобы мы могли Вам перезвонить, ответить
      на все Ваши вопросы и предоставить расчет
    </div>
    <div class="form__input">
      <p class="form__overtitle">Как к вам обращаться:</p>
      <input type="text" v-model="popupName" />
    </div>
    <div class="form__input">
      <p class="form__overtitle">Ваш телефон:</p>
      <input
        type="tel"
        placeholder="+998 (90) 999-99-99"
        v-model="popupPhone"
        v-mask="'+998 (##) ###-##-##'"
      />
    </div>
    <button class="button">Получить расчет</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import VueMask from "v-mask";
Vue.use(VueMask);
@Component({
  components: {
    Button,
  },
})
export default class Form2 extends Vue {
  popupPhone = null;
  popupName = null;
}
</script>
