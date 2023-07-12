<template>
  <main class="baseLayout">
    <div class="baseLayout__inner">
      <slot />
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.baseLayout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.baseLayout__inner {
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  background-color: #e5e5e5;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}
</style>