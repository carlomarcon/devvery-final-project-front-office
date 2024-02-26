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
          link: '',
          type: 'GOURMET'
        },
        {
          cover: 'cinese',
          link: '',
          type: 'CINESE'
        },
        {
          cover: 'fast-food',
          link: '',
          type: 'FAST FOODS'
        },
        {
          cover: 'giapponese',
          link: '',
          type: 'GIAPPONESE'
        },
        {
          cover: 'hamburgheria',
          link: '',
          type: 'PANINOTECHE'
        },
        {
          cover: 'pasticceria',
          link: '',
          type: 'PASTICCERIE'
        },
        {
          cover: 'pizzeria',
          link: '',
          type: 'PIZZERIE'
        },
        {
          cover: 'trattoria',
          link: '',
          type: 'TRATTORIE'
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        autoplay: 2000
      },
      breakpoints: {
        // 700px and up
        500: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
      },
    };
  },

  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/imgTypes/${img}.png`, import.meta.url).href;
    },
  }
};
</script>
<template>
  <Carousel class="w-100 mt-4 mb-4" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true"
    :pause-autoplay-on-hover="true">
    <Slide v-for="slide in images" :key="slide">
      <img class="carousel__item" :src="getImagepath(slide.cover)" alt="">
      <a href="{{ slide-link }}">{{ slide.type }}</a>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.carousel__item {
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.carousel__slide {
  padding: 5px;
}

a {
  z-index: 3;
  position: absolute;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bolder;
  color: $ms_dark;
  left: 0;
  bottom: 0;
  background-color: white;
  padding: .2rem 1rem .2rem 1rem;
  border-radius: 0 10px 0px 0;
}
</style>
