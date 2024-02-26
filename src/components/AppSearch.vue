<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
        store,
    };
  },
  components: {},
  created() {
    axios.get(`${this.baseUrl}/api/types`).then((resp) => {
      this.store.myTypes = resp.data.result;
    });
  },
  methods: {
    filteredRestaurants() {
      this.store.checkedTypes = [];
      if (this.store.search.length === 0) {
        this.store.flag = false;
      } else {
        axios
          .get(`${this.baseUrl}/api/restaurants/searchText/${this.store.search}`)
          .then((resp) => {
            // console.log(resp.data.result[0]);
            this.store.restaurants = resp.data.result;
            console.log(resp.data.result);
          })
          .finally(() => {
            this.store.flag = true;
          });
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-end">
      <form class="px-4 py-1" action="">
        <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input v-model="store.search" @input="filteredRestaurants" id="search" type="text" placeholder="Cerca Ristorante" />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

i {
  position: absolute;
  z-index: 1;
  top: 19%;
  left: 3%;
  font-size: 1.5rem;
  color: $ms_dark;
}

input {
  border: none;
  text-align: center;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: $ms_yellow;
  }
}

form {
  border: 2px solid $ms_dark;
  line-height: 30px;
  position: relative;
  border-radius: 5px;
}
</style>
