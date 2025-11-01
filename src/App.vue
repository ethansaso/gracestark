<script setup lang="ts">
import HeroSplash from "./components/HeroSplash.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <HeroSplash />
  <NavBar />
  <div className="content-wrapper">
    <div className="page-content">
      <RouterView />
    </div>
  </div>
</template>

<style>
.content-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-content {
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 720px;
}
</style>
