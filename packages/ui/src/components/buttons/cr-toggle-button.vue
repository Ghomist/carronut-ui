<script setup lang="ts">
import BasicButton from "./basic-button.vue";
import { crToggleButtonDefaults } from "./defaults";
import type { CrToggleButtonEmits, CrToggleButtonProps } from "./types";

defineOptions({
  name: "CrToggleButton"
});

const props = withDefaults(defineProps<CrToggleButtonProps>(), crToggleButtonDefaults);

const model = defineModel<boolean>();
const emit = defineEmits<CrToggleButtonEmits>();

const onToggled = (e: MouseEvent) => {
  if (props.disabled) return;
  model.value = !model.value;
  emit("toggled", model.value);
  emit("click", e);
};
</script>

<template>
  <BasicButton
    class="cr-toggle-button"
    v-bind="$props"
    :class="{ active: model }"
    @click="onToggled"
  >
    <slot></slot>
  </BasicButton>
</template>
