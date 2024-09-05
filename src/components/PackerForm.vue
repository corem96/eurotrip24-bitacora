<script setup lang="ts">
import ClothesSelector from '@/components/controls/ClothesSelector.vue'
import ElectronicsSelector from '@/components/controls/ElectronicsSelector.vue'
import DocsFinancial from '@/components/controls/DocsFinancialSelector.vue'
import ToiletriesSelector from '@/components/controls/ToiletriesSelector.vue'
import MiscellaneousSelector from '@/components/controls/MiscellaneousSelector.vue'
</script>

<template>
  <div class="container">
    <h2>Formulario maletero</h2>
    <p>Crea aquí tu maleta con todo lo que vas a empacar</p>

    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <fieldset class="col-md-12">
            <div class="mb-3">
              <label class="form-label" for="descripcion">Descripción</label>
              <input type="text" class="form-control" id="descripcion" required placeholder="Descripción">
            </div>
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="col-md-4">
            <div class="mb-3">
              <label class="form-label" for="text">Ancho</label>
              <input type="text" class="form-control" id="text" required placeholder="Ancho">
            </div>
          </fieldset>
          <fieldset class="col-md-4">
            <div class="mb-3">
              <label class="form-label" for="text">Alto</label>
              <input type="text" class="form-control" id="text" required placeholder="Alto">
            </div>
          </fieldset>
          <fieldset class="col-md-4">
            <div class="mb-3">
              <label class="form-label" for="text">Fondo</label>
              <input type="text" class="form-control" id="text" required placeholder="Fondo">
            </div>
          </fieldset>
        </div>
        <div class="row">
          <fieldset class="col-md-6">
            <div class="mb-3">
              <label class="form-label" for="text">Peso (vacía)</label>
              <input type="text" class="form-control" id="text" required placeholder="Peso (vacía)">
            </div>
          </fieldset>
          <fieldset class="col-md-6">
            <div class="mb-3">
              <label class="form-label" for="text">Peso (llena)</label>
              <input type="text" class="form-control" id="text" required placeholder="Peso (llena)">
            </div>
          </fieldset>
        </div>
      </div>

      <div class="col-md-6">
        <ClothesSelector />
        <ElectronicsSelector />
        <DocsFinancial />
        <ToiletriesSelector />
        <MiscellaneousSelector />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" class="pt-0">#</th>
              <th scope="col" class="pt-0">Item</th>
              <th scope="col" class="pt-0">Cant</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            <tr>
              <td colspan="4">
                <table class="table mb-0">
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Cant</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>calcetines</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            ...
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<div>

</div>

<div class="container">

</div>

<div>

</div>