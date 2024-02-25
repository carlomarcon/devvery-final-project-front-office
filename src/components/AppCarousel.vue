<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",

  data() {
    return {
      imgArray: [
        "https://www.my-personaltrainer.it/2020/09/07/hamburger_900x760.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        "https://www.todis.it/wp-content/uploads/2023/05/sushi-fatto-in-casa.jpg",
        "https://www.donnamoderna.com/content/uploads/2003/03/Cotoletta-alla-milanese-830x625.jpg",
        "https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2022/11/pasta-alla-lupara/_R5_1095.jpg",
      ],
    };
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
<template>
  <div class="container">
    <carousel
      :items-to-show="2"
      :wrap-around="true"
      class="carousel"
      :autoplay="1250"
    >
      <slide v-for="slide in imgArray" :key="slide">
        <div class="carousel__item"><img :src="slide" alt="" /></div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: none;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  aspect-ratio: 1;
}

.carousel {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;
  }
}
</style>
