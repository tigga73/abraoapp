<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

library.add(faEnvelope);
library.add(faPenToSquare);

type Icons = 'envelope' | 'pen';

defineProps<{
  name: string;
  type: string;
  modelValue: string;
  placeholder: string;
  icon: Icons;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const iconsBase: { [key: string]: string } = {
  envelope: 'envelope',
  pen: 'pen-to-square'
};

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="h-10 rounded-md relative">
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      class="rounded-md w-full h-full border-2 focus:border-primary focus:outline-none pl-4 shadow-sm placeholder-slate-400"
      :placeholder="placeholder"
      @input="handleInput"
    />

    <FontAwesomeIcon
      :icon="['far', iconsBase[icon]]"
      class="absolute right-4 top-1/2 transform -translate-y-1/2"
      style="color: #e7b646"
    />
  </div>
</template>

<style scoped lang="scss"></style>
