<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      activeSection: 'section1'
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    }
  }
};
</script>

 
<template>
  <div>
    <AppHeader />
    
    <div class="container mt-5 mb-5">
      <h2>Informativa Sulla Privacy</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Indice</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('section1')">Sezione 1</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('section2')">Sezione 2</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('section3')">Sezione 3</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Contenuto</h5>
            </div>
            <div class="card-body">
              <div id="section1" class="section-content" :class="{ 'd-none': activeSection !== 'section1' }">
                <h6>Sezione 1</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error ullam soluta voluptatum unde quisquam pariatur maiores adipisci eveniet cumque, reiciendis eum, saepe consequatur labore fugiat nam placeat facilis assumenda?</p>

              </div>
              <div id="section2" class="section-content" :class="{ 'd-none': activeSection !== 'section2' }">
                <h6>Sezione 2</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error ullam soluta voluptatum unde quisquam pariatur maiores adipisci eveniet cumque, reiciendis eum, saepe consequatur labore fugiat nam placeat facilis assumenda?</p>

              </div>
              <div id="section3" class="section-content" :class="{ 'd-none': activeSection !== 'section3' }">
                <h6>Sezione 3</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error ullam soluta voluptatum unde quisquam pariatur maiores adipisci eveniet cumque, reiciendis eum, saepe consequatur labore fugiat nam placeat facilis assumenda?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;


</style>
  