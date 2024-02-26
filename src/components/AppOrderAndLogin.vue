<script>
export default {};
</script>
<template>
  <div class="wrapper">
    <div class="container d-none d-md-flex align-items-center mt-3 p-3 gap-4">
      <div class="col w-50 h-50">
        <h3>I migliori ristoranti della città nella tua mano!</h3>
        <p>
          Goditila flessibilità e la libertà che solo le consegne Devvery
          garaniscono!
        </p>
        <button class="btn btn-dark">ORDINA ORA</button>
      </div>
      <div class="col w-50 h-50">
        <img src="../assets/images/main/ristorante stellato.jpg" alt="Borghese" />
      </div>
    </div>
    <div class="container d-none d-md-flex align-items-center mt-3 p-3 gap-4">
      <div class="col w-50 h-50">
        <img src="../assets/images/main/borghese.png" alt="Borghese" />
      </div>
      <div class="col w-50 h-50">
        <h3>Unisciti a noi e preparati a raggiungere il voto 10 in cucina!</h3>
        <p>
          Raggiungi più clienti con Devvery.Gestiamo noi la consegna, così tu
          puoi dedicarti a offrire i migliori piatti e prodotti.
        </p>
        <button class="btn btn-dark">REGISTRATI</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .wrapper {
    padding: 3rem;
    background-color: #fdb633;
    .col {
      img {
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>
