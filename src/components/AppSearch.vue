<script>
import axios from 'axios';

export default {
  data() {
    return {
      search: "",
      restaurants: [],
      baseUrl: 'http://127.0.0.1:8000',
      // myTypes: ['Pasticceria', 'Hamburgher', 'Gourmet', 'Giappo', 'Cinese', 'Trattoria', 'Pizzeria', 'FastFood'],
      myTypes: [],
      checkedTypes: [],
    };
  },
  components: {},
  created() {
    axios.get(`${this.baseUrl}/api/types`).then((resp) => {
      // console.log(resp.data.result);
      resp.data.result.forEach(element => {
        this.myTypes.push(element.name)
      });
      // console.log(this.myTypes)
    })
  },
  methods: {
    check(){
      console.log(this.checkedTypes);
    },

    filteredRestaurants() {
      axios.get(`${this.baseUrl}/api/restaurants/searchText/${this.search}`)
        .then(function (response) {
          console.log(response.data.result[0]);
        }) 
    },

    checkTypes() {
      if (this.checkedTypes.length > 0) {
      const params= {types:this.checkedTypes};
      axios.get(`${this.baseUrl}/api/restaurants/types`, {params})
      .then(function (response) {
          console.log(response.data.result);
          // console.log(this.checkedTypes);
        }) }
    }
  },
}
</script>

<template>
  <div>
    <form action="">
      <label for="search"></label>
      <input type="text" v-model="search" placeholder="Ristoranti,pizzerie.." @input="filteredRestaurants" />

      <div v-for="myType in myTypes"> 
        <input type="checkbox" :id="myType" :value="myType" v-model="checkedTypes" @input="checkTypes" :key="myType">
        <label :for="myType" :key="myType">{{ myType }}</label>
      </div>
    </form>

<button  @click="checkTypes" >Cerca per tipi</button>

    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <h3>{{ restaurant.name }}</h3>
    </div>

    <button @click="filteredRestaurants">Cerca per nome</button>
  </div>
</template>

<style lang="scss" scoped>
input {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  height: 3rem;
  width: 16rem;
  border-radius: 11px;
  border-color: #01222b;
}

input::placeholder {
  color: #fdb633;
}
</style>
