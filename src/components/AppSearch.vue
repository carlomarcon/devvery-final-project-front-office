<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      store,
      myTypes: [],
      checkedTypes: [],
    };
  },
  created() {
    axios.get(`${this.baseUrl}/api/types`)
      .then((resp) => {
        this.myTypes = resp.data.result;
      });
      axios.get(`${this.baseUrl}/api/types`).then((resp) => {
      this.store.myTypes = resp.data.result;
    });
  },
  components: {},

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
    checkTypes() {
      this.store.restaurants = [];
      this.store.flag = false;
      if (this.checkedTypes.length > 0) {
        
        let dates = [];
        this.checkedTypes.forEach((element) => {
          dates.push(element.name);
        });
        const params = { types: dates };
        axios
          .get(`${this.baseUrl}/api/restaurants/types`, { params })
          .then((resp) => {
            if (!(typeof resp.data.result === 'string')) {
              this.store.restaurants = resp.data.result;
            }
          })
          .finally(() => {
            if(this.store.restaurants.length > 0)
            this.store.flag = true;
          })
      }
    },
  },

};
</script>

<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-end">
      <form class="px-5 py-1" action="">
        <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input v-model="store.search" @input="filteredRestaurants" id="search" type="text"
          placeholder="Cerca Ristorante" />
      </form>
    </div>
  </div>
  <div class="d-flex flex-column align-items-center">
    <form class="d-flex flex-wrap gap-3 fs-5 text-light my-4" action="">
      <div class="" v-for="myType in myTypes" :key="myType">
        <label :for="myType.name">{{ myType.name }}</label>
        <input type="checkbox" :id="myType.name" :value="myType" v-model="checkedTypes">
      </div>
    </form>
    <button @click="checkTypes">Cerca per tipi</button>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

i {
  position: absolute;
  z-index: 1;
  top: 27%;
  left: 3%;
  font-size: 2rem;
  color: $ms_dark;
}

.container {
  input {
    border: none;
    text-align: center;
    background-color: transparent;
    font-size: 2rem;

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: $ms_yellow;
    }
  }

  form {
    border: 4px solid $ms_dark;
    line-height: 60px;
    position: relative;
    border-radius: 5px;
    background-color: white;
  }
}
</style>
