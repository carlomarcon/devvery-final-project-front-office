<script>

import axios from "axios";
import { store } from "../store";

export default {
    data() {
        return {
            store,
            baseUrl: 'http://127.0.0.1:8000',
            myTypes: [],
            checkedTypes: [],
            restaurants: [],
        };
    },

    components: {},

    created() {
        axios.get(`${this.baseUrl}/api/types`)
            .then((resp) => {
                this.myTypes = resp.data.result;
            });
    },

    methods: {
        checkTypes() {
            this.restaurants = [];
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
                            this.restaurants = resp.data.result;
                        }
                    });
            }
        },
    },
}
</script>

<template>
    <form action="">
        <div class="" v-for="myType in myTypes">
            <label :for="myType" :key="myType">{{ myType.name }}</label>
            <input type="checkbox" :id="myType" :value="myType" v-model="checkedTypes" :key="myType">
        </div>
    </form>
    <button @click="checkTypes">Cerca per tipi</button>

    <div class="container-fluid">

<h2 class="text-center">
  Risultati trovati: {{ this.restaurants.length }}
</h2>


<div class="row row-cols-1 row-cols-sm-3 row-cols-lg-6">
  <div class="col g-4 d-flex justify-content-center" v-for="restaurant in restaurants">

    <div class="card">
      <div class="card-body">
        <img :src="`${this.baseUrl}/storage/${restaurant.cover_image}`" alt="" class="card-img-top" />
        <h5 class="card-title">{{ restaurant.name }}</h5>
        <p class="card-text">Indirizzo: {{ restaurant.address }}</p>
        <p class="card-text">Telefono: {{ restaurant.phone }}</p>
        <a href="#" class="btn btn-primary">Vai al ristorante</a>
      </div>
    </div>

  </div>
</div>


</div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;
</style>