<script>
export default {};
</script>
<template>
  <div class="position-relative">
    <form action="">
      <label for="Search"></label>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Ristoranti,pizzerie.." />
    </form>
  </div>
</template>
<style lang="scss" scoped>
i {
  position: absolute;
  top: 50%;
  right: 73%;
  z-index: 1;
  font-size: 1.5rem;
}

input {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1.5rem;
  height: 3rem;
  width: 18.4rem;
  border-radius: 11px;
  border-color: #01222b;
  text-align: center;
}
input::placeholder {
  color: #fdb633;
}
</style>
