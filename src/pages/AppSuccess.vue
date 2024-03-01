<script>
export default {
  data() {
    return {};
  },
  created() {
    setTimeout(() => this.$router.push("/"), 3000);
  },
};
</script>
<template>
  <div
    class="wrapper w-100 d-flex justify-content-center align-items-center text-center"
  >
    <div class="success">
      <img
        src="../assets/images/main/pittogramma.png"
        alt=""
        class="animatedImage"
      />
      <h2 class="my-3">Thanks for the order !</h2>
      <h4>You will be redirect shortly to the home page</h4>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-color: #fdb633;

  img {
    //   animation: rotation 2s infinite linear;
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: 2;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.disappear {
  display: none;
}
</style>
