<script setup>
defineProps({
  message: String
});
</script>

<template>
  <a
      href="/"
      class="text-indigo-600 hover:text-indigo-800 transition-colors"
  >
    ← {{ message }}
  </a>
</template>
