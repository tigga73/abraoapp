<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faEnvelope);

type Icons = 'envelope' | 'user';

defineProps<{
  name: string;
  type: string;
  modelValue: string;
  placeholder: string;
  icon: Icons;
}>();

const iconsBase: { [key: string]: string } = {
  envelope: 'envelope',
  user: 'user'
};
</script>

<template>
  <div class="h-10 rounded-md border-2 border-neutral-300 relative">
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      class="rounded-md w-full h-full focus:border-transparent pl-4 shadow-sm placeholder-slate-400"
      :placeholder="placeholder"
    />

    <FontAwesomeIcon
      :icon="['far', iconsBase[icon]]"
      class="absolute right-4 top-1/2 transform -translate-y-1/2"
      style="color: #e7b646"
    />
  </div>
</template>

<style scoped lang="scss"></style>
