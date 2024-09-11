<template>
    <div class="main-container">
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <style>
  .main-container {
    display: flex;
    justify-content: center; 
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
    background-color: rgba(0, 0, 0, 0.3); /* Slightly transparent background */
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    gap: 40px;
  }
  
  @keyframes gradientBackground {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  </style>
  