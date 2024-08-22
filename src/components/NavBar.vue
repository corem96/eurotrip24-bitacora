<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Navbar nav scrolling -->
  <nav class="navbar text-bg-dark navbar-expand-lg"
    style="background-color: var(--bs-content-bg); border-bottom: var(--bs-border-width) solid var(--bs-content-border-color);">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">
        <img src="../assets/europe-icon.svg" alt="Logo" width="24" height="24" class="d-inline-block align-text-top">
        Eurotrip 2024
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-7"
        aria-controls="navbar-collapse-7" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-collapse-7">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/bitacora">Bitacora</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/maletero">Maletero</RouterLink>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Detalles
            </a>
            <ul class="dropdown-menu mt-lg-2 rounded-top-0">
              <li><a class="dropdown-item" href="#">Page builder</a></li>
              <li><a class="dropdown-item" href="#">Form builder</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Plan and pricing</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>


  <!-- <ul class="nav nav-pills">
    <li class="nav-item">
      
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/maletero">Maletero</RouterLink>
    </li>
  </ul> -->
</template>