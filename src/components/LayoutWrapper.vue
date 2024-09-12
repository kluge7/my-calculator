<template>
  <div class="main-container">
    <div class="content-wrapper">
      <slot></slot>
    </div>
    <div class="footer-section">
      <p>Powered by Vue.js</p>
      <p>
        Source Code: 
        <a href="https://github.com/kluge7/my-calculator" target="_blank">
          https://github.com/kluge7/my-calculator
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(45deg, #ff6ec4, #7873f5, #59c1e7, #ff6ec4);
  background-size: 300% 300%;
  animation: gradientBackground 10s ease infinite;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  max-width: 800px;
  gap: 40px;
  margin-bottom: 20px;
}

.footer-section {
  width: 100%;
  max-width: 800px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.footer-section p {
  margin: 0;
  color: white;
  font-size: 14px;
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
