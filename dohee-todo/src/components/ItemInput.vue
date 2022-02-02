<template>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="할일을 입력해주세요!"
      v-model="title"
      @keyup.enter="addItem"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { Item } from '@/store/store.interface'

@Component({
  computed: mapState(['todoList'])
})
export default class ItemInput extends Vue {
  todoList!: Item[]
  title = '';

  addItem (): void {
    console.log('addItem')
    this.$store.commit('addItem', {
      id: this.todoList.length + 1,
      title: this.title,
      status: 'clear'
    })
    this.title = ''
  }
}
</script>

<style scoped>

</style>
