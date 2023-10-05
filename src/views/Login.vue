<script setup lang="ts">
import CoolIcon from '@/assets/icons/CoolIcon.vue';
</script>

<template>
  <div
    class="flex flex-col md:flex-row min-h-screen lg:max-h-screen overflow-hidden"
  >
    <div class="flex-1 flex-wrap content-center hidden lg:flex">
      <CoolIcon class="max-w-full" />
    </div>
    <div class="flex-1 flex flex-col justify-center px-20">
      <h1 class="text-6xl font-bold mb-6 text-black">
        <span class="text-amber">L</span>ogin
      </h1>
      <p class="text-xl font-light">Acesse a sua conta no Abra.</p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
