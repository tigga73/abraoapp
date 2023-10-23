<script setup lang="ts">
import IconRegister from '@/assets/icons/IconRegister.vue';
import SignUpForm from '@/components/SignUpForm.vue';
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:max-h-screen overflow-hidden"
  >
    <div class="flex flex-col justify-center px-20">
      <h1 class="text-6xl font-bold text-black">
        <span class="text-primary">C</span>adastro
      </h1>
      <p class="text-xl font-light my-4">
        Tenha acesso ao NextGo Orders criando uma conta.
      </p>

      <SignUpForm />
    </div>

    <div class="flex-wrap content-center hidden lg:max-h-screen lg:flex">
      <IconRegister class="max-w-full" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
