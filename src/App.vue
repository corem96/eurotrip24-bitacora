<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import 'halfmoon/css/halfmoon.min.css'
</script>

<template>
  <header class="mb-auto">
    <NavBar />
  </header>

  <main class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <RouterView />
  </main>
</template>
