<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured } from 'vue';

const count = ref(0);
const triggerError = ref(false);

onBeforeMount(() => console.log('%c⏳ Перед монтированием [onBeforeMount]', 'color: cyan; font-weight: bold;'));
onMounted(() => console.log('%c✅ Компонент смонтирован [onMounted]', 'color: yellow; font-weight: bold;'));
onBeforeUpdate(() => console.log('%c⏳ Перед обновлением [onBeforeUpdate]', 'color: pink; font-weight: bold;'));
onUpdated(() => console.log('%c🔄 Компонент обновлён [onUpdated]', 'color: orange; font-weight: bold;'));
onBeforeUnmount(() => console.log('%c⏳ Перед уничтожением [onBeforeUnmount]', 'color: blue; font-weight: bold;'));
onUnmounted(() => console.log('%c❌ Компонент уничтожен [onUnmounted]', 'color: grey; font-weight: bold;'));


onErrorCaptured((err) => {
  console.error('🚨 Ошибка в компоненте:', err);
  return false;
});
</script>

<template>
  <div class="p-4 m-2 border rounded shadow-md bg-white text-center">
    <p class="text-lg font-bold">Счётчик: {{ count }}</p>
    <button @click="count++" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      Увеличить
    </button>
    <button @click="triggerError = true" class="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
      Вызвать ошибку
    </button>

    <!-- Намеренно вызываем ошибку -->
    <p v-if="triggerError">{{ nonexistentVar.someProperty }}</p>
  </div>
</template>
