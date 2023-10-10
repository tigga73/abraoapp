<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './shared/FormInput.vue';

const email = ref<string>('');
</script>

<template>
  <form>
    <label>Email</label>
    <FormInput
      name="email"
      type="text"
      v-model="email"
      icon="envelope"
      placeholder="Digite seu email"
    />
  </form>
</template>

<style scoped lang="scss"></style>
