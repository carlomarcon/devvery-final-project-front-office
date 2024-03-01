<script>
export default {};
</script>

<template>
  <div class="wrapper py-5 px-5">

    <div class="container py-5">

      <div class="text-center mb-5">
        <h2>Il cibo che vuoi quando vuoi...Da<span class="text-light">vv</span>ero!</h2>
      </div>

      <div class="row row-cols-12 flex-column gap-5">

        <div class="col d-flex align-items-center flex-column flex-md-row-reverse">
          <div class="d-flex justify-content-center justify-content-sm-end mb-4">
            <img src="../assets/images/main/ristorante-stellato.jpg" alt="Foto Ristorante" />
          </div>
          <div class="w-100 text-center text-sm-start">
            <h3>I migliori ristoranti della città nella tua mano!</h3>
            <p>Goditila flessibilità e la libertà che solo le consegne Devvery garaniscono!</p>
            <a href="#top" class="btn btn-dark">ORDINA ORA</a>
          </div>
        </div>

        <div class="col d-flex align-items-center flex-column flex-md-row">
          <div class="d-flex justify-content-center justify-content-sm-start mb-4">
            <img src="../assets/images/main/chef.jpg" alt="Foto di Chef" />
          </div>
          <div class="w-100 text-center text-sm-end">
            <h3>Unisciti a noi e preparati a raggiungere il voto 10 in cucina!</h3>
            <p>Raggiungi più clienti con Devvery.Gestiamo noi la consegna, così tu puoi dedicarti a offrire i migliori
              piatti e prodotti.</p>
            <a href="http://127.0.0.1:8000/register" class="btn btn-dark">REGISTRATI</a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-color: #fdb633;
  margin-top: 6rem;


  &::before {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 7rem;
    position: absolute;
    display: block;
    z-index: 9;
    top: -104px;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 6rem;
    position: absolute;
    display: block;
    z-index: 99;
    bottom: -62px;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    rotate: 180deg;
  }

  .col {
    img {
      width: 75%;
      border-radius: 15px;
    }
  }
}
</style>
