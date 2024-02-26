<script>
import axios from "axios";
export default {
  data() {
    return {
      result: [],
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/restaurants/" + this.$route.params.slug)
      .then((resp) => {
        // this.result = resp.data;
        console.log(resp.data.foods);
        this.result = resp.data.foods;
      })
      .finally(() => {
        console.log(this.result);
      });

    // console.log(this.$route.params.slug);
  },
};
</script>
<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="items in result">
      {{ items.name }}
    </li>
  </ul>
</template>
<style lang="scss" scoped></style>
