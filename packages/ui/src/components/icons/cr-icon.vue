<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import type { CrIconProps } from "./types";

defineOptions({
  name: "CrIcon"
});

const props = withDefaults(defineProps<CrIconProps>(), {
  size: "medium"
});

const width = computed(() =>
  props.size === "small" ? "1em" : props.size === "medium" ? "1.5em" : "2em"
);
</script>

<template>
  <Icon class="cr-icon" :icon="name" :width="width" :color="color" />
</template>
