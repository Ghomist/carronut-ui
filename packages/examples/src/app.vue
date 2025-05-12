<script setup lang="ts">
// import { CrDivider, CrIcon, CrToggleButton, CrCard, CrElasticBox } from "carronut-ui";
import { CrDivider } from "carronut-ui";
import { computed, onUnmounted, ref } from "vue";

const bool = ref(true);
const counter = ref(0);
const boolText = computed(() => (bool.value ? "开" : "关"));
const randomText = ref("");

const itv = setInterval(() => {
  if (randomText.value.length > 10) randomText.value = "";
  const n = randomText.value.length;
  randomText.value += Math.floor(Math.random() * 10)
    .toFixed()
    .repeat(n + 1);
}, 1000);

onUnmounted(() => {
  clearInterval(itv);
});
</script>

<template>
  <header>Carronut UI Examples</header>

  <main>
    <CrDivider label="图标" />

    <CrIcon name="mingcute:vue-fill"></CrIcon>
    <CrIcon name="mingcute:vue-fill" color="red"></CrIcon>

    <CrDivider label="按钮" />
    <CrButton @click="counter++">
      <CrElasticBox> 按钮（{{ counter ? `已点${counter}次` : "点我！" }}） </CrElasticBox>
    </CrButton>
    <CrButton disabled> 禁用的按钮 </CrButton>
    <CrButton icon="mingcute:angel-line"> 带图标的按钮 </CrButton>
    <CrButton icon="mingcute:angel-line" icon-placement="right"> 右侧图标的按钮 </CrButton>
    <CrButton icon="mingcute:check-circle-line" icon-placement="stack"> 堆叠图标按钮 </CrButton>

    <CrDivider label="切换按钮" />
    <CrToggleButton v-model="bool"> 切换按钮：{{ boolText }} </CrToggleButton>
    <CrToggleButton :model-value="true" disabled> 禁用的切换按钮 </CrToggleButton>

    <CrDivider label="卡片" />
    <CrCard header="卡片标题" footer="卡片底栏"> 这里是一个卡片，有标题、内容、底栏 </CrCard>

    <CrDivider label="弹性盒子" />
    <CrCard>
      <CrElasticBox>{{ randomText }}</CrElasticBox>
    </CrCard>
  </main>
</template>
