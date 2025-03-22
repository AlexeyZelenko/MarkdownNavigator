import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    base: '/MarkdownNavigator/',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    define: {
        'import.meta.env.VITE_BASE_URL': JSON.stringify('https://alexeyzelenko.github.io/MarkdownNavigator/')
    }
});
