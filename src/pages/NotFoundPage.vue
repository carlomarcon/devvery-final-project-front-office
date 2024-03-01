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
            activeSection: 'mainSection'
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

        <div class="ms_container container  d-flex">
            <div class="row">
                <div class="col d-flex flex-column align-items-center">
                    <img src="../assets/images/404/404-img2.png" alt="">
                    <router-link  to="/" class="btn btn-success mb-4">Torna alla Home</router-link>
                </div>
                <div class="col d-none d-md-block d-lg-block "><img src="../assets/images/404/404-img.png" alt=""></div>
            </div>         

        </div>
        <AppFooter />
    </div>
</template>


<style lang="scss" scoped>
img {    
    height: 100%;
}

.btn { width: 10rem;

}

.wrapper {
    background-color: #fdb633;
    overflow: hidden;

}

.ms_container {
  position: relative;
  margin-top: 4rem;
  min-height: 100%;


//   &::before {
//     width: 100%;
//     background-image: url(../assets/images/main/onda.png);
//     content: '';
//     height: 4rem;
//     position: absolute;
//     display: block;
//     z-index: 9;
//     bottom: -62px;
//     transform: rotate(180deg);
//     left: 0;
//     background-size: cover;
//     background-repeat: no-repeat;

//   }

  
}
</style>

