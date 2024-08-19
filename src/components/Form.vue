<template>
  <form action="#" class="form">
    <div class="form__title">Рассчитайте стоимость ремонта</div>
    <div class="form__block">
      <div class="form__overtitle">Тип помещения:</div>
      <div class="form__checkbox">
        <input
          type="radio"
          name="radio1"
          value="Вторичка"
          id="radio1-1"
          v-model="selectedRoom"
        />
        <label for="radio1-1">
          <span>
            <img src="@/assets/images/main/check.png" alt="" />
          </span>
          <p>Вторичка</p>
        </label>
      </div>
      <div class="form__checkbox">
        <input
          v-model="selectedRoom"
          type="radio"
          name="radio1"
          value="Новостройка"
          id="radio1-2"
        />
        <label for="radio1-2">
          <span>
            <img src="@/assets/images/main/check.png" alt="" />
          </span>
          <p>Новостройка</p>
        </label>
      </div>
    </div>
    <div class="form__block">
      <div class="form__overtitle">Тип ремонта:</div>
      <div class="form__checkbox">
        <input
          v-model="selectedRepairType"
          type="radio"
          name="radio2"
          value="Капитальный"
          id="radio2-1"
        />
        <label for="radio2-1">
          <span>
            <img src="@/assets/images/main/check.png" alt="" />
          </span>
          <p>Капитальный</p>
        </label>
      </div>
      <div class="form__checkbox">
        <input
          v-model="selectedRepairType"
          type="radio"
          name="radio2"
          value="Дизайнерский"
          id="radio2-2"
        />
        <label for="radio2-2">
          <span>
            <img src="@/assets/images/main/check.png" alt="" />
          </span>
          <p>Дизайнерский</p>
        </label>
      </div>
    </div>
    <div class="form__block">
      <div class="form__overtitle">
        Площадь квартиры: <span>{{ area }}</span> м
        <sup>2</sup>
      </div>
      <div class="form__range" ref="rangeSlider"></div>
      <div class="form__startend">
        <p>1 м<sup>2</sup></p>
        <p>250 м<sup>2</sup></p>
      </div>
    </div>
    <div class="form__input">
      <p class="form__overtitle">Как к вам обращаться:</p>
      <input type="text" v-model="name" />
    </div>
    <div class="form__input">
      <p class="form__overtitle">Ваш телефон:</p>
      <input
        type="tel"
        v-model="tel"
        placeholder="+998 (90) 999-99-99"
        v-mask="'+998 (##) ###-##-##'"
      />
    </div>
    <Button>Получить расчет</Button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

@Component({
  components: {
    Button,
  },
})
export default class Form extends Vue {
  name = "";
  tel = "";
  selectedRoom = "Вторичка";
  selectedRepairType = "Капитальный";

  area = 20;
  mounted() {
    const slider = this.$refs.rangeSlider as HTMLElement & { noUiSlider?: any };
    noUiSlider.create(slider, {
      start: [this.area],
      connect: [true, false],
      padding: [0, 0],
      step: 1,
      range: {
        min: 1,
        max: 250,
      },
    });
    slider.noUiSlider?.on("update", (values: string[]) => {
      this.area = Math.round(parseFloat(values[0]));
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.noUi-base {
  cursor: pointer;
}
.noUi-horizontal .noUi-handle {
  right: -7px;
  top: -4px;
}
.noUi-handle {
  cursor: pointer;
  width: 13px !important;
  height: 13px !important;
  background: $main;
  border: none;
  box-shadow: none;
  border-radius: 50%;
  &:before,
  &:after {
    display: none;
  }
}
.noUi-target {
  border: none;
  width: 100%;
  height: 5px;
  background: #e9edf3;
  border-radius: 0;
}
.noUi-connect {
  background: $main;
}
</style>
