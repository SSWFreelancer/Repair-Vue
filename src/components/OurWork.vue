<template>
  <div class="our-works__item">
    <div class="our-works__image">
      <img src="@/assets/images/our-works/1.png" alt="" />
    </div>
    <div class="our-works__item-title">
      Дизайнерский ремонт 2-х комнатной квартиры
    </div>
    <div class="our-works__texts">
      <p>Площадь - 71 м 2</p>
      <p>Время ремонта - 2,5 месяца</p>
      <p>Стоимость работы: <span>568 000 ₽</span></p>
      <p>Материалы:<span> 477 000 ₽</span></p>
    </div>
    <Button @click="openPopup">Подробнее</Button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import { mapActions } from "vuex";
@Component({
  components: {
    Button,
  },
  methods: {
    ...mapActions(["openPopup"]),
  },
})
export default class OurWork extends Vue {}
</script>
