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
      activeSection: 'dataSection'
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
  <div class="wrapper">
    <AppHeader />
    
    <div class="ms-container container mt-5 mb-5">
      <h2>Informativa Sulla Privacy</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Indice</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('dataSection')">Utilizzo dei tuoi dati</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('cookiesSection')">Cookies</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('securitySection')">Sicurezza</a></li>
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
              <div id="dataSection" class="section-content" :class="{ 'd-none': activeSection !== 'dataSection' }">
                <h6>Utilizzo dei tuoi dati</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error ullam soluta voluptatum unde quisquam pariatur maiores adipisci eveniet cumque, reiciendis eum, saepe consequatur labore fugiat nam placeat facilis assumenda?</p>

              </div>
              <div id="cookiesSection" class="section-content" :class="{ 'd-none': activeSection !== 'cookiesSection' }">
                <h6>Cookies</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error ullam soluta voluptatum unde quisquam pariatur maiores adipisci eveniet cumque, reiciendis eum, saepe consequatur labore fugiat nam placeat facilis assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia animi cum impedit voluptatibus aperiam deserunt nemo odit officiis eius ipsam dolor, consectetur autem aliquam similique quasi quo minima vero?
                Tenetur eaque consectetur, provident quibusdam debitis culpa dolorem perspiciatis, corporis amet neque dolor labore dicta iure eveniet tempora eligendi molestiae. Quas magnam, soluta dignissimos aliquid ipsum distinctio quibusdam eligendi eos!</p>

              </div>
              <div id="securitySection" class="section-content" :class="{ 'd-none': activeSection !== 'securitySection' }">
                <h6>Sicurezza</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error ullam soluta voluptatum unde quisquam pariatur maiores adipisci eveniet cumque, reiciendis eum, saepe consequatur labore fugiat nam placeat facilis assumenda?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati neque magni similique sed fugit impedit, omnis ipsam ratione quas eum facilis repudiandae asperiores molestias quia delectus. Saepe beatae veniam maxime!</p>
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
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
  