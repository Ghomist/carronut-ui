<script setup lang="ts">
import type { CrCardProps } from "./types";

defineOptions({
  name: "CrCard"
});

defineProps<CrCardProps>();
</script>

<template>
  <div class="cr-card">
    <div v-if="$slots.header || header" class="cr-card-header" :class="{ split }">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="cr-card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer || footer" class="cr-card-footer" :class="{ split }">
      <slot name="footer">
        {{ footer }}
      </slot>
    </div>
  </div>
</template>
