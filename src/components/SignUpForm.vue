<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './shared/FormInput.vue';
import FormInputPassword from './shared/FormInputPassword.vue';

const attendantName = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');
</script>

<template>
  <form @submit.prevent>
    <label>Nome do atendente</label>
    <FormInput
      name="email"
      type="text"
      v-model="attendantName"
      icon="pen"
      placeholder="Digite o nome do atendente"
      class="mb-4"
    />

    <label>Nome do atendente</label>
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
      class="mb-4"
    />

    <label>Confirme sua senha</label>
    <FormInputPassword
      name="email"
      v-model="confirmPassword"
      placeholder="Digite sua senha"
      class="mb-4"
    />

    <button
      class="mt-4 bg-primary text-center w-full text-white rounded font-semibold h-9"
    >
      Entrar
    </button>
  </form>
</template>

<style scoped lang="scss"></style>
