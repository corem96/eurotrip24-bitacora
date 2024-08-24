<script setup lang="ts">
import ClothesSelector from '@/components/controls/ClothesSelector.vue'
import ElectronicsSelector from '@/components/controls/ElectronicsSelector.vue'
import DocsFinancial from '@/components/controls/DocsFinancialSelector.vue'
import ToiletriesSelector from '@/components/controls/ToiletriesSelector.vue'
import MiscellaneousSelector from '@/components/controls/MiscellaneousSelector.vue'
</script>

<template>
    <div>
        <ClothesSelector />
        <ElectronicsSelector />
        <DocsFinancial />
        <ToiletriesSelector />
        <MiscellaneousSelector />
    </div>
</template>