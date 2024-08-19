<template>
  <section id="projects" class="our-works">
    <div class="our-works__container">
      <Title class="our-works__title">Наши работы</Title>
      <swiper
        :slides-per-view="3"
        :space-between="20"
        loop
        :pagination="paginationOptions"
        :breakpoints="breakpoints"
      >
        <swiper-slide>
          <OurWork />
        </swiper-slide>
        <swiper-slide>
          <OurWork />
        </swiper-slide>
        <swiper-slide>
          <OurWork />
        </swiper-slide>
        <swiper-slide>
          <OurWork />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
SwiperCore.use([Pagination]);

import { Vue, Component } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import OurWork from "@/components/OurWork.vue";

@Component({
  components: {
    Title,
    Swiper,
    SwiperSlide,
    OurWork,
  },
})
export default class OurWorks extends Vue {
  paginationOptions = {
    el: ".swiper-pagination",
    clickable: true,
  };

  breakpoints = {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.our-works {
  &__title {
    margin-bottom: 38px;
    @media (max-width: 593px) {
      margin-bottom: 25px;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    & img {
      transition: all 0.3s ease 0s;
      user-select: none;
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
  &__item-title {
    font-weight: 700;
    font-size: 18px;
    line-height: calc(22 / 18);
  }
  & .swiper-pagination {
    padding-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 30px;
    position: static;
    & .swiper-pagination-bullet {
      border-radius: 0;
      transition: all 0.3s ease 0s;
      transform: rotate(45deg);
      margin: 0;
      &-active {
        background-color: $main;
      }
    }
  }
  &__texts {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 7px;
    & p {
      font-weight: 400;
      font-size: 16px;
      line-height: calc(20 / 16);
      color: #818396;
      & span {
        color: $main;
        font-weight: 700;
      }
    }
  }
}
</style>
