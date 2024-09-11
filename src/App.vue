<script setup lang="ts">
import Calculator from './components/calculator/Calculator.vue'
</script>

<template>
  <div class="main-container">
    <!-- Wrapper for both the text and calculator -->
    <div class="content-wrapper">
      <!-- Left Section with Text -->
      <div class="text-section">
        <h1>About Me</h1>
        <p>
          I am a passionate software developer with a keen interest in algorithms and problem-solving.
          In my free time, I engage in various programming projects like this calculator app and enjoy contributing to open-source projects.
        </p>
      </div>

      <!-- Right Section with Calculator -->
      <div class="calculator-section">
        <Calculator />
      </div>
    </div>
  </div>
</template>

<style>
/* Global styles */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden; /* Disable scrolling */
}

/* Main container layout */
.main-container {
  display: flex;
  justify-content: center; /* Center the content-wrapper */
  align-items: center;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(45deg, #ff6ec4, #7873f5, #59c1e7, #ff6ec4);
  background-size: 300% 300%;
  animation: gradientBackground 10s ease infinite;
}

/* Wrapper for both text and calculator */
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3); /* Slightly transparent background */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Shadow around the whole box */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Optional border */
  gap: 40px; /* Add space between text and calculator */
}

/* Text Section Styles */
.text-section {
  width: 400px; /* Fixed width for the text box */
  padding: 20px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1); /* Transparent white box */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Typography adjustments */
.text-section h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.text-section p {
  font-size: 1.2rem;
  line-height: 1.6;
}

@keyframes gradientBackground {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
