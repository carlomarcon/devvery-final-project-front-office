<script>
import { defineComponent } from 'vue'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Autoplay",

  data() {
    return {
      images: [
        {
          cover: 'alta-cucina',
          link: 'https://www.google.it/?hl=i',
          type: 'GOURMET'
        },
        {
          cover: 'cinese',
          link: '',
          type: 'CINESE'
        },
        {
          cover: 'fast-food',
          link: 'https://www.google.it/?hl=it',
          type: 'FAST FOODS'
        },
        {
          cover: 'giapponese',
          link: 'https://www.google.it/?hl=it',
          type: 'GIAPPONESE'
        },
        {
          cover: 'hamburgheria',
          link: 'https://www.google.it/?hl=it',
          type: 'PANINOTECHE'
        },
        {
          cover: 'pasticceria',
          link: 'https://www.google.it/?hl=it',
          type: 'PASTICCERIE'
        },
        {
          cover: 'pizzeria',
          link: 'https://www.google.it/?hl=it',
          type: 'PIZZERIE'
        },
        {
          cover: 'trattoria',
          link: 'https://www.google.it/?hl=it',
          type: 'TRATTORIE'
        },
      ],
      settings: {
        itemsToShow: 0.7,
        snapAlign: 'center',
        autoplay: 3000,
        mouseDrag: false,
      },
    };
  },

  components: {
    Carousel,
    Slide,
    Navigation
  },
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/imgTypes/${img}.png`, import.meta.url).href;
    },
  }
};
</script>
<template>
  <Carousel class="w-100" v-bind="settings" :wrap-around="true">
    <Slide v-for="slide in images" :key="slide">
      <img class="carousel__item" :src="getImagepath(slide.cover)" alt="">
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;
.carousel {
  position: absolute;
  top: 0;
  z-index: -999999;
  filter: brightness(40%);
}
.carousel__item {
  height: 1000px;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
