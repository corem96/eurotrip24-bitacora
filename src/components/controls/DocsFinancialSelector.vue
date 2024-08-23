<script lang="ts">
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
      <option selected>Select an option</option>
      <option v-for="doc in docsFinantial" :key="doc.id" :value="doc.id">
        {{ doc.item_name }}
      </option>
    </select>
  </div>
</template>