<script setup lang="ts">
import { NavigationMenu } from "reka-ui/namespaced";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const activeRoute = route.path;
</script>

<template>
  <NavigationMenu.Root class="nav-bar">
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link as-child>
          <RouterLink to="/">Home</RouterLink>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link as-child>
          <RouterLink to="/publications">Publications</RouterLink>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link as-child>
          <RouterLink to="/news">News</RouterLink>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link as-child>
          <RouterLink to="/about">About</RouterLink>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
</template>

<style>
nav.nav-bar {
  position: sticky;
  display: flex;
  justify-content: center;
  top: var(--spacing-2xl);
  transform: translateY(-50%);

  ul {
    list-style: none;
    margin: 0;
    padding: var(--spacing-sm) var(--spacing-md);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);

    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-2xl);

    font-size: var(--font-size-xl);
    box-shadow: var(--shadow-md);

    li a {
      text-decoration: none;
      color: var(--color-content);
      padding: 0 var(--spacing-sm);
    }
  }

  .router-link-active {
    font-weight: 700;
  }
}
</style>
