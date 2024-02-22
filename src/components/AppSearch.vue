<script>
export default {};
</script>
<template>
  <div>
    <form action="">
      <label for="Search"></label>
      <input type="text" placeholder="Ristoranti,pizzerie.." />
    </form>
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
