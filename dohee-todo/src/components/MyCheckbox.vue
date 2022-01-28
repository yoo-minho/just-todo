<template>
  <input type="checkbox" :checked="checked" @change="change">
</template>

<script lang="ts">
import { Vue, Component, Model, Emit } from 'vue-property-decorator'

@Component
export default class MyCheckbox extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean;

  @Emit()
  change (event: Event): boolean {
    const target = event.target as HTMLInputElement
    return target.checked
  }
}
</script>
