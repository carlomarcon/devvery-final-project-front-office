<script>
export default {};
</script>
<template>
  <body>
    <div
      class="content text-center d-flex align-items-center ps-3 pe-3 justify-content-center"
    >
      <img src="../img/ristorante.jpeg" alt="content" />
      <h2>
        I migliori ristoranti della città nel palmo della tua mano davvero!
      </h2>
    </div>
    <div
      class="content text-center d-flex align-items-center ps-3 pe-3 justify-content-center"
    >
      <img src="../img/chef.jpg" alt="content" />
      <h2>Sei un ristorante? Lavora con noi!</h2>
    </div>
  </body>
</template>
<style lang="scss" scoped>
body {
  background-color: #fdb633;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.content {
  height: 20rem;
  flex-wrap: wrap;
  gap: 3rem;

  img {
    width: 70%;
    height: 60%;
    object-fit: cover;
  }
}

@media (min-width: 768px) {
  body {
    display: none;
  }
}
</style>
