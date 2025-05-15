<script setup>
import { CrButton } from "carronut-ui";
import { CrToggleButton } from "carronut-ui";
import { CrElasticBox } from "carronut-ui";
import { ref } from "vue";

const count = ref(0);
</script>

# 按钮

点按就会有回应的基本控件。

## 基础按钮

<CrButton @click="count++">
<CrElasticBox>
{{ count ? `已点 ${count} 次` : "点我" }}
</CrElasticBox>
</CrButton>

::: details 代码实现

```vue
<script setup>
import { CrButton } from "carronut-ui";
import { CrElasticBox } from "carronut-ui";
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <CrButton @click="count++">
    <CrElasticBox>
      {{ count ? `已点 ${count} 次` : "点我" }}
    </CrElasticBox>
  </CrButton>
</template>
```

:::

## 切换按钮

```
<CrToggleButton v-model=""> 切换 </CrToggleButton>
```

<CrToggleButton> 切换 </CrToggleButton>

## API
