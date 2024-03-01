<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      myTypes: [],
      checkedTypes: [],
    };
  },
  created() {
    axios.get(`${this.store.baseUrl}/api/types`)
      .then((resp) => {
        this.myTypes = resp.data.result;
      });
    axios.get(`${this.store.baseUrl}/api/types`).then((resp) => {
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
          .get(`${this.store.baseUrl}/api/restaurants/searchText/${this.store.search}`)
          .then((resp) => {
            // console.log(resp.data.result[0]);
            this.store.restaurants = resp.data.result;
          
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
          .get(`${this.store.baseUrl}/api/restaurants/types`, { params })
          .then((resp) => {
            if (!(typeof resp.data.result === 'string')) {
              this.store.restaurants = resp.data.result;
              // console.log(this.store.restaurants);
            }
          })
          .finally(() => {
            if (this.store.restaurants.length > 0)
              this.store.flag = true;
          })
      }
    },
  },

};
</script>

<template>
  <div class="container">
    <div>
      <h2 class="text-center text-light mt-5">CERCA UN RISTORANTE PER NOME O PER CATEGORIA</h2>
      <div class="d-flex align-items-center justify-content-center mt-5">
        <form :class="checkedTypes.length > 0 ? 'ms_opacity' : ''" class="px-5 py-1" action="">
          <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
          <input v-bind:disabled="checkedTypes.length > 0" v-model="store.search" @input="filteredRestaurants" id="search" type="text"
            placeholder="Cerca Ristorante" />
        </form>
      </div>
    </div>

    <div>
      <div class="d-flex justify-content-center gap-4 mt-5 flex-wrap">

        <div v-for="myType in myTypes" class="checkbox-wrapper-10">
          <input v-bind:disabled="store.search.length > 0" v-model="checkedTypes" @change="checkTypes" :value="myType" class="tgl tgl-flip" :id="`cb5-${myType.name}`" type="checkbox" />

          <label :class="store.search.length > 0 ? 'ms_opacity' : ''" class="tgl-btn" :data-tg-off="myType.name" :data-tg-on="myType.name" :for="`cb5-${myType.name}`">
          </label>

        </div>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.container {
  padding: 1rem 0 6rem 0;
}

.ms_opacity {
  filter: opacity(50%);
}

i {
  position: absolute;
  z-index: 1;
  top: 27%;
  left: 3%;
  font-size: 1rem;
  color: $ms_dark;

  @media screen and (min-width: 991px) {
    font-size: 2.5rem;
  }
}

.container {
  input {
    border: none;
    text-align: center;
    background-color: transparent;
    font-size: 1rem;

    @media screen and (min-width: 991px) {
    font-size: 2.5rem;
  }

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: $ms_dark;
    }
  }

  form {
    border: 4px solid $ms_dark;
    position: relative;
    border-radius: 5px;
    background-color: white;
  }
}

// CHECKBOX

.checkbox-wrapper-10 .tgl {
  display: none;
}

.checkbox-wrapper-10 .tgl+.tgl-btn {
  box-sizing: border-box;
}

.checkbox-wrapper-10 .tgl+.tgl-btn::selection {
  background: none;
}

.checkbox-wrapper-10 .tgl+.tgl-btn {
  outline: 0;
  display: block;
  width: 250px;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 600px) {
    width: 120px;
  }

}

.checkbox-wrapper-10 .tgl+.tgl-btn:after,
.checkbox-wrapper-10 .tgl+.tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
}

.checkbox-wrapper-10 .tgl+.tgl-btn:after {
  left: 0;
}

.checkbox-wrapper-10 .tgl+.tgl-btn:before {
  display: none;
}

.checkbox-wrapper-10 .tgl:checked+.tgl-btn:after {
  left: 50%;
}

.checkbox-wrapper-10 .tgl-flip+.tgl-btn {
  padding: 2px;
  transition: all 0.2s ease;
  font-family: sans-serif;
  perspective: 200px;
  font-size: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
}

.checkbox-wrapper-10 .tgl-flip+.tgl-btn:after,
.checkbox-wrapper-10 .tgl-flip+.tgl-btn:before {
  display: inline-block;
  padding: 0 .5rem 0 .5rem;
  transition: all 0.4s ease;
  width: 100%;
  text-align: center;
  position: absolute;
  line-height: 2em;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}

.checkbox-wrapper-10 .tgl-flip+.tgl-btn:after {
  content: attr(data-tg-on);
  background: $ms_yellow;
  transform: rotateY(-180deg);
}

.checkbox-wrapper-10 .tgl-flip+.tgl-btn:before {
  background: $ms_dark;
  content: attr(data-tg-off);
}

.checkbox-wrapper-10 .tgl-flip+.tgl-btn:active:before {
  transform: rotateY(-20deg);
}

.checkbox-wrapper-10 .tgl-flip:checked+.tgl-btn:before {
  transform: rotateY(180deg);
}

.checkbox-wrapper-10 .tgl-flip:checked+.tgl-btn:after {
  transform: rotateY(0);
  left: 0;
  background: $ms_yellow;
}

.checkbox-wrapper-10 .tgl-flip:checked+.tgl-btn:active:after {
  transform: rotateY(20deg);
}
</style>
