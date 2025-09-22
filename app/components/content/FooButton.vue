<script setup lang="ts">
const props = defineProps<{
  type?: 'primary' | 'secondary'
}>()

function handleClick() {
  console.log('clicked')
}
</script>

<template>
  <button
    @click="handleClick"
    class="btn"
    :class="{
      'primary': type === 'primary',
      'secondary': type === 'secondary'
    }"
  ><slot mdc-unwrap="p"/>
</button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn.primary {
  color: #fff;
  background: #000;
}

.btn.secondary {
  color: #000;
  background: #fff;
  border: 1px solid #000;
}
</style>