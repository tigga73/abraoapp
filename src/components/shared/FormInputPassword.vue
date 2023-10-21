<script setup lang="ts">
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

library.add(faEye);
library.add(faEyeSlash);

defineProps<{
  name: string;
  modelValue: string;
  placeholder: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const isText = ref<boolean>(false);
const icon = ref<string>('eye-slash');

const changeInputType = () => {
  isText.value = !isText.value;
  isText.value ? (icon.value = 'eye') : (icon.value = 'eye-slash');
};

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="h-10 rounded-md relative">
    <input
      :type="isText ? 'text' : 'password'"
      :name="name"
      :value="modelValue"
      class="rounded-md w-full h-full border-2 focus:border-primary focus:outline-none pl-4 shadow-sm placeholder-slate-400"
      :placeholder="placeholder"
      @input="handleInput"
    />

    <button type="button" @click="changeInputType">
      <FontAwesomeIcon
        :icon="['far', icon]"
        class="absolute right-4 top-1/2 transform -translate-y-1/2"
        style="color: #e7b646"
      />
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
