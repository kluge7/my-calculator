<script setup lang="ts">
import '@assets/calculator/simplecalculator.css'
import { ref } from 'vue'
import CalculatorDisplay from './CalculatorDisplay.vue'
import CalculatorButtons from './CalculatorButtons.vue'
import { evaluate } from 'mathjs'

const displayValue = ref('')

const handleCalculatorButtonClick = (value: string) => {
  if (
    (displayValue.value === 'Error' ||
      parseFloat(displayValue.value) === Infinity ||
      isNaN(parseFloat(displayValue.value))) &&
    value !== '='
  ) {
    displayValue.value = ''
  }
  if (value === 'AC') {
    displayValue.value = ''
  } else if (value === '+/-') {
    displayValue.value = displayValue.value.startsWith('-')
      ? displayValue.value.slice(1)
      : `-${displayValue.value}`
  } else if (value === '%') {
    displayValue.value = String(parseFloat(displayValue.value) / 100)
  } else if (value === '=') {
    try {
      displayValue.value = evaluate(displayValue.value)
    } catch (error) {
      displayValue.value = 'Error'
    }
  } else {
    displayValue.value += value
  }
}
</script>

<template>
  <div class="calculator">
    <CalculatorDisplay :value="displayValue" />
    <CalculatorButtons @button-click="handleCalculatorButtonClick" />
  </div>
</template>
