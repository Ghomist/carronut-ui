<script setup lang="ts">
import type { CrInputProps } from "./types";

defineOptions({
  name: "CrInput"
});

withDefaults(defineProps<CrInputProps>(), {
  type: "text"
});

const model = defineModel<string>();
</script>

<template>
  <input class="cr-input" v-model="model" :type :placeholder :disabled />
</template>
