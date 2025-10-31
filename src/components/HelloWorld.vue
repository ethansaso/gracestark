<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

defineProps<{ msg: string }>()

const count = ref(0)
const count2 = computed(() => count.value * 2)
const time = ref(new Date().toLocaleTimeString())

const timer = setInterval(() => {
  time.value = new Date().toLocaleTimeString()
}, 1000)

function increment() {
  count.value++
}

onMounted(increment);

onUnmounted(() => {
  clearInterval(timer)
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}, doublecount is {{  count2  }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>Current time: {{ time }}</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
