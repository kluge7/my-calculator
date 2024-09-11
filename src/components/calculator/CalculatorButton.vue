<script setup lang="ts">
import '@assets/calculator/calculatorButton.css'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['button-click'])

const handleClick = () => {
  emit('button-click', props.value)
}
</script>

<template>
  <button @click="handleClick" class="calculator-button">
    {{ label }}
  </button>
</template>
