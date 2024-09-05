<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/SupabaseClient'

const getDocsFinancial = async () => {
  const { data, error } = await supabase
    .from('pack_docs_financial')
    .select()
    .order('item_name', { ascending: true })

  if (error) {
    alert(error)
  }

  docsFinancial.value = data
}

const docsFinancial = ref<any[] | null>([])

onMounted(() => {
  getDocsFinancial()
})
</script>

<template>
  <div class="mb-3">
    <label for="docs-selector" class="form-label">Docs & Finanzas</label>
    <select class="form-select" id="docs-selector">
      <option selected>selecciona...</option>
      <option v-for="doc in docsFinancial" :key="doc.id" :value="doc.id">
        {{ doc.item_name }}
      </option>
    </select>

    <div class="mt-1">
      <button type="button" class="btn btn-primary ms-auto">Agregar</button>
    </div>
  </div>
</template>