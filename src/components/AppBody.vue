<script>
export default {};
</script>
<template>
  <div class="concept text-center align-items-center px-3">
      <h2>Il cibo che vuoi quando vuoi..da<span>vv</span>ero!</h2>
    </div>

  <section>
    <div class="content text-center d-flex align-items-center ps-3 pe-3 justify-content-center">
      <img class="rounded" src="../assets/images/main/ristorante.jpeg" alt="content" />
      <h2>
        I migliori ristoranti della città nel palmo della tua mano davvero!
      </h2>
    </div>

    <div class="content text-center d-flex align-items-center ps-3 pe-3 justify-content-center">
      <img class="rounded" src="../assets/images/main/chef.jpg" alt="content" />
      <h2>Sei un ristorante? Lavora con noi!</h2>
    </div>
  </section>
</template>
<style lang="scss" scoped>


section {
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
  section {
    display: none;
  }
}

.concept {
  color: #fdb633;
  position: relative;
  padding: 3rem 0 8rem 0;

  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    bottom: -1px;
    left: 0;
    background-size:cover;
    background-repeat: no-repeat;
}

  span {
    color: black;
    height: 30px;
  }
}
</style>
