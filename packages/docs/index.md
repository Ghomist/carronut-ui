<!-- Redirect to language-specific page -->

<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()

onMounted(() => {
  const lang = navigator.language.toLowerCase()
  const path = lang.startsWith('zh') ? '/zh/' : '/en/'
  router.go(withBase(path))
})
</script>
