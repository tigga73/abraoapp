<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './shared/FormInput.vue';
import FormInputPassword from './shared/FormInputPassword.vue';

const email = ref<string>('');
const password = ref<string>('');
</script>

<template>
  <form @submit.prevent>
    <label>Email</label>
    <FormInput
      name="email"
      type="text"
      v-model="email"
      icon="envelope"
      placeholder="Digite seu email"
      class="mb-4"
    />

    <label>Senha</label>
    <FormInputPassword
      name="email"
      v-model="password"
      placeholder="Digite sua senha"
    />

    <button
      class="mt-4 bg-primary text-center w-full text-white rounded font-semibold h-9"
    >
      Entrar
    </button>
  </form>
</template>

<style scoped lang="scss"></style>
