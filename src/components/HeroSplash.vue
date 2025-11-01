<script setup lang="ts">
import { socials } from "@/consts/socials";
import { Icon } from "@iconify/vue";
import { Avatar } from "reka-ui/namespaced";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const bgClass = computed(() => {
  const path = route.path;

  if (path === "/") return "bg-home";
  if (path.startsWith("/research")) return "bg-research";
  if (path.startsWith("/publications")) return "bg-publications";
  if (path.startsWith("/about")) return "bg-about";

  return "bg-default";
});
</script>

<template>
  <div :class="['hero-splash', bgClass]">
    <Avatar.Root size="lg" class="avatar">
      <Avatar.Image src="/chicken.jpg" alt="Grace Stark Logo" />
    </Avatar.Root>
    <div class="hero-text">
      <h1>Grace Stark</h1>
      <h2>PhD Microbiology, BSc Biochemistry</h2>
    </div>
    <ul class="socials">
      <li v-for="s in socials" :key="s.label">
        <a :href="s.href" :aria-label="s.label" target="_blank" rel="noopener">
          <Icon :icon="s.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.hero-splash {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-4xl) var(--spacing-xl);
  background-color: hsla(0, 0%, 10%, 1);

  .avatar {
    margin-bottom: var(--spacing-sm);
  }

  .hero-text {
    margin-bottom: var(--spacing-xl);
    text-align: center;

    h1,
    h2 {
      color: var(--color-background);
      text-shadow: var(--shadow-md);
    }

    h1 {
      font-size: var(--font-size-5xl);
      margin: 0;
      font-weight: 700;
    }
    h2 {
      margin: 0;
      font-size: var(--font-size-2xl);
      font-weight: normal;
    }
  }

  ul.socials {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-sm);
      font-size: var(--font-size-3xl);
      width: var(--font-size-xl);
      height: var(--font-size-xl);

      background-color: var(--color-background);
      color: var(--color-content);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius-4xl);
    }
  }

  &.bg-home {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
      url("/backgrounds/neurospora-gfp-2.jpg");
    background-position: 50% 10%;
    background-repeat: no-repeat;

    @media (min-width: 1096px) {
      background-size: cover;
    }
  }
}
</style>
