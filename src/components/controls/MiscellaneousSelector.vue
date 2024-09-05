<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient'

const miscellaneous = ref<any[] | null>([])

const getMiscellaneous = async () => {
  const { data, error } = await supabase
    .from('pack_miscellaneous')
    .select()
    .order('item_name', { ascending: true })

  if (error) {
    alert(error)
  }

  miscellaneous.value = data
}

onMounted(() => {
  getMiscellaneous()
})
</script>

<template>
  <div class="mb-3">
    <label for="miscellaneous-selector" class="form-label">Miscelaneos</label>
    <select class="form-select" id="miscellaneous-selector">
      <option selected>selecciona...</option>
      <option v-for="misc in miscellaneous" :key="misc.id" :value="misc.id">
        {{ misc.item_name }}
      </option>
    </select>

    <div class="mt-1">
      <button type="button" class="btn btn-primary ms-auto">Agregar</button>
    </div>
  </div>
</template>
