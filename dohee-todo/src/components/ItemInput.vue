<template>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="할일을 입력해주세요!"
      @keyup.enter="addItem"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ItemInput extends Vue {
  addItem (): void {
    console.log('addItem')
  }
}
</script>

<style scoped>

</style>
