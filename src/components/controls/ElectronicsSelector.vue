<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient'

const electronics = ref<any[] | null>([])

const getElectronics = async () => {
  const { data, error } = await supabase
    .from('pack_electronics')
    .select()
    .order('item_name', { ascending: true })

  if (error) {
    alert(error)
  }

  electronics.value = data
}

onMounted(() => {
  getElectronics()
})
</script>

<template>
  <div class="mb-3">
    <label for="electronics-selector" class="form-label">Electrónicos</label>
    <select class="form-select" id="electronics-selector">
      <option selected>Select an option</option>
      <option v-for="electronic in electronics" :key="electronic.id" :value="electronic.id">
        {{ electronic.item_name }}
      </option>
    </select>
  </div>
</template>
