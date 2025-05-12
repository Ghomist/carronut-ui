<script setup lang="ts">
import CrIcon from "../icons/cr-icon.vue";
import { crButtonDefaults } from "./defaults";
import type { CrButtonEmits, CrButtonProps } from "./types";

defineOptions({
  name: "BasicButton"
});

withDefaults(defineProps<CrButtonProps>(), crButtonDefaults);
defineEmits<CrButtonEmits>();
</script>

<template>
  <button
    type="button"
    :class="{ stacked: iconPlacement === 'stack', disabled }"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <CrIcon v-if="icon && iconPlacement !== 'right'" :name="icon" />
    <slot></slot>
    <CrIcon v-if="icon && iconPlacement === 'right'" :name="icon" />
  </button>
</template>
