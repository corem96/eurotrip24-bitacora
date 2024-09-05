<script setup lang="ts">

type Pointer = {
  img: string
}

const props = defineProps<Pointer>()
</script>

<template>
  <div class="card shadow-sm w-sm-50 mw-75 mx-auto m-5">
    <img :src="`../src/assets/img/${props.img}`" class="card-img-top" :alt="`${props.img}`">
    <div class="card-body">
      <div class="card-title d-flex">
        <slot name="heading"></slot>
      </div>
      <div class="card-text">
        <slot name="data-list"></slot>
      </div>
    </div>
    <div class="card-footer">
      <slot name="city"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

@media (min-width: 400px) {
  .card {
    font-size: small;
  }

  .card-body {
    padding: 2svb;
  }
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) /4);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
