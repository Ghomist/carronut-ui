<script setup lang="ts">
import BasicButton from "./basic-button.vue";
import { crButtonDefaults } from "./defaults";
import type { CrButtonEmits, CrButtonProps } from "./types";

defineOptions({
  name: "CrButton"
});

withDefaults(defineProps<CrButtonProps>(), crButtonDefaults);
defineEmits<CrButtonEmits>();
</script>

<template>
  <BasicButton class="cr-button" v-bind="$props" @click="$emit('click', $event)">
    <slot></slot>
  </BasicButton>
</template>
