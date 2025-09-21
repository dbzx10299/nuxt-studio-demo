<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(path, () => {
  return queryCollection('blog').path(path).first()
})
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Home not found</div>
</template>