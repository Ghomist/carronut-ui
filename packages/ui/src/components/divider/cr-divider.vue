<script setup lang="ts">
import { crDividerDefaults } from "./defaults";
import type { CrDividerProps } from "./types";

defineOptions({
  name: "CrDivider"
});

withDefaults(defineProps<CrDividerProps>(), crDividerDefaults);
</script>

<template>
  <div
    class="cr-divider"
    :class="direction"
    :style="{ '--cr-divider-width': width, '--cr-divider-length': length }"
  >
    <span v-if="label" class="cr-divider--label" :class="labelPosition"> {{ label }} </span>
  </div>
</template>
