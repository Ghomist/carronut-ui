<script setup lang="ts">
import { useMutationObserver } from "@vueuse/core";
import { onMounted, useTemplateRef } from "vue";

defineOptions({
  name: "CrElasticBox"
});

const crElasticBoxRef = useTemplateRef("crElasticBoxRef");
const crElasticBoxContentRef = useTemplateRef("crElasticBoxContentRef");

const syncSize = () => {
  if (!crElasticBoxRef.value || !crElasticBoxContentRef.value) return;
  crElasticBoxRef.value.style.width = `${crElasticBoxContentRef.value.scrollWidth}px`;
  crElasticBoxRef.value.style.height = `${crElasticBoxContentRef.value.scrollHeight}px`;
};

onMounted(() => {
  syncSize();
  useMutationObserver(crElasticBoxContentRef, syncSize, {
    childList: true,
    subtree: true,
    characterData: true
  });
});
</script>

<template>
  <div ref="crElasticBoxRef" class="cr-elastic-box">
    <div ref="crElasticBoxContentRef" class="cr-elastic-box--content">
      <slot></slot>
    </div>
  </div>
</template>
