<script setup>
defineProps({
  message: String
});
</script>

<template>
  <a
      href="/MarkdownNavigato/"
      class="text-indigo-600 hover:text-indigo-800 transition-colors ml-2"
  >
    ← {{ message }}
  </a>
</template>
