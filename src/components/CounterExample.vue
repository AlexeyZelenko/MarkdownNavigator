<script setup>
import {ref, defineAsyncComponent, onErrorCaptured} from 'vue';

// Переключение отображения компонента
const showComponent = ref(false);
const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

// Динамический импорт компонента
const ErrorComponent = defineAsyncComponent(() =>
    import('../components/ErrorComponent.vue').catch((err) => {
      console.error('Ошибка загрузки компонента:', err);
    })
);

// Глобальный обработчик ошибок
onErrorCaptured((err) => {
  console.error('🚨 [onErrorCaptured] Глобальная ошибка:', err);
  return false;
});
</script>

<template>
  <div class="p-4 text-center">
    <button @click="toggleComponent" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
      {{ showComponent ? 'Удалить компонент' : 'Показать компонент' }}
    </button>

    <Suspense>
      <template #default>
        <ErrorComponent v-if="showComponent"/>
      </template>
      <template #fallback>
        <p class="text-gray-500">Загрузка...</p>
      </template>
    </Suspense>
  </div>
</template>
