<script setup lang="ts">
import '@assets/calculator/calculatorButtons.css'
import CalculatorButton from './CalculatorButton.vue'

const buttonConfigs = [
  { label: 'AC', value: 'AC' },
  { label: '+/-', value: '+/-' },
  { label: '%', value: '%' },
  { label: '/', value: '/' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '*', value: '*' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '-', value: '-' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '+', value: '+' },
  { label: '0', value: '0', class: 'double-width' },
  { label: '.', value: '.' },
  { label: '=', value: '=' }
]

const emit = defineEmits(['button-click'])

const handleButtonClick = (value: string) => {
  emit('button-click', value)
}
</script>

<template>
  <div class="calculator-buttons">
    <CalculatorButton
      v-for="(button, index) in buttonConfigs"
      :key="index"
      :label="button.label"
      :value="button.value"
      :class="button.class"
      @button-click="handleButtonClick"
    />
  </div>
</template>
