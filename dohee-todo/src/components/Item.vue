<template>
  <div class="input-group mb-3">
    <div class="input-group-text">
      <input
        class="form-check-input mt-0"
        type="checkbox"
        :checked="status === 'active'"
        aria-label="Checkbox for following text input"
        @change="changeStatus"
      >
    </div>
    <input
      type="text"
      class="form-control"
      :value="title"
      aria-label="Text input with checkbox">
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="removeItem">X</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  @Prop() readonly id!: string;
  @Prop() readonly title!: string;
  @Prop() readonly status!: 'active' | 'clear';

  changeStatus ({ target }: { target: HTMLInputElement }): void {
    console.log('changeStatus')
    const checked: boolean = target.checked
    this.$store.commit('changeStatus', { id: this.id, status: checked ? 'active' : 'clear' })
  }

  removeItem (): void {
    console.log('removeItem')
    this.$store.commit('removeItem', this.id)
  }
}
</script>

<style scoped>

</style>
