<script setup lang="ts">
import '@assets/calculator/calculatorDisplay.css'

const props = defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="calculator-display">
    {{ value }}
  </div>
</template>
