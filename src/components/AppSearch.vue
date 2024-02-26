<script>
export default {};
</script>

<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-end">
      <form class="px-4 py-1" action="">
        <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
        <input id="search" type="text" placeholder="Cerca Ristorante" />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

i {
  position: absolute;
  z-index: 1;
  top: 19%;
  left: 3%;
  font-size: 1.5rem;
  color: $ms_dark;
}

input {
  border: none;
  text-align: center;
 
  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: $ms_yellow;
  }
}

form {
  border: 2px solid $ms_dark;
  line-height: 30px;
  position: relative;
  border-radius: 5px;
}
</style>
