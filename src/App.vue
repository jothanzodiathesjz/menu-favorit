<template>
  <h1 class="mb-5">{{ Heading }}</h1>
<RouterView></RouterView>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const Heading = ref<String>('Menu Favorit');
</script>

