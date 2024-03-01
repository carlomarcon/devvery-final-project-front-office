<script>
export default {

}
</script>

<template>
    <main>
        <div class="ms_bg-yellow d-flex align-items-center">
            <div class="container d-flex flex-column align-items-center">
                <h1 class="text-light">404 NOT FOUND</h1>
                <router-link class="btn ms_btn-dark mt-3 fs-1 px-5" :to="{ name: 'home' }">BACK</router-link>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.ms_bg-yellow {
    height: 100vh;
    h1 {
        font-size: 5rem;
    }
}
</style>