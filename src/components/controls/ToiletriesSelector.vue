<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient'

const toiletries = ref<any[] | null>([])

const getToiletries = async () => {
  const { data, error } = await supabase
    .from('pack_toiletries')
    .select()
    .order('item_name', { ascending: true })

  if (error) {
    alert(error)
  }

  toiletries.value = data
}

onMounted(() => {
  getToiletries()
})
</script>

<template>
  <div class="mb-3">
    <label for="toiletries-selector" class="form-label">Artículos de higiene</label>
    <select class="form-select" id="toiletries-selector">
      <option selected>selecciona...</option>
      <option v-for="toiletry in toiletries" :key="toiletry.id" :value="toiletry.id">
        {{ toiletry.item_name }}
      </option>
    </select>

    <div class="mt-1">
      <button type="button" class="btn btn-primary ms-auto">Agregar</button>
    </div>
  </div>
</template>
