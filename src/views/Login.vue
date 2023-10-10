<script setup lang="ts">
import CoolIcon from '@/assets/icons/CoolIcon.vue';
import SignInForm from '@/components/SignInForm.vue';
</script>

<template>
  <div
    class="flex flex-col md:flex-row min-h-screen lg:max-h-screen overflow-hidden"
  >
    <div class="flex-1 flex-wrap content-center hidden lg:flex">
      <CoolIcon class="max-w-full" />
    </div>
    <div class="flex-1 flex flex-col justify-center px-20">
      <h1 class="text-6xl font-bold text-black">
        <span class="text-primary">L</span>ogin
      </h1>
      <p class="text-xl font-light my-4">Acesse a sua conta no Abra.</p>

      <SignInForm />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
