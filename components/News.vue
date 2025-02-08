<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String
});
</script>

<template>
  <div class="flex justify-center">
    <Card>
      <template #title>{{ title }}</template>
      <template #content>
        <p>
          {{ content }}
        </p>
      </template>
    </Card>
  </div>
</template>

<style></style>