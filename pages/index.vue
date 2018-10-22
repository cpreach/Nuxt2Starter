<template>
  <section class="grid">
    <div class="cell-A">CellA</div>
    <div class="cell-B">CellB</div>
    <div class="cell-C">CellC</div>
    <div class="cell-D">CellD</div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.grid {
  font-size: 2rem;
}
section {
  height: 100%;
  width: 100%;
  background-color: green;
}

h1 {
  color: $color-primary;
}

.grid {
  display: grid;
  grid-gap: 10px;
  grid-template:
    'a   b' 200px
    'c   d' 100px /
    200px 1fr;
}

.cell-A {
  grid-area: a;
  background-color: lightcoral;
}

.cell-B {
  grid-area: b;
  background-color: cadetblue;
}

.cell-C {
  grid-area: c;
  background-color: burlywood;
}

.cell-D {
  grid-area: d;
  background-color: darkolivegreen;
}
</style>
