<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient'

const clothes = ref<any[] | null>([])

const getClothes = async () => {
  const { data, error } = await supabase
    .from('pack_clothes')
    .select()
    .order('item_name', { ascending: true })

  if (error) {
    alert(error)
  }

  clothes.value = data
}

onMounted(() => {
  getClothes()
})
</script>

<template>
  <div class="mb-3">
    <label for="clothes-selector" class="form-label">Ropa</label>
    <select class="form-select" id="clothes-selector">
      <option selected>Select an option</option>
      <option v-for="cloth in clothes" :key="cloth.id" :value="cloth.id">
        {{ cloth.item_name }}
      </option>
    </select>
  </div>
</template>
