<template>
  <div>
    <item
      v-for="v in renderList"
      :key="v.id"
      :id="v.id"
      :title="v.title"
      :status="v.status"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import item from '@/components/Item.vue'
import { mapGetters } from 'vuex'
import { Item } from '@/store/store.interface'

@Component({
  components: {
    item
  },
  computed: {
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList'
    ])
  }
})
export default class ItemList extends Vue {
  renderList: Item[] = [];
  allTodoList!: Item[];
  activeTodoList!: Item[];
  clearTodoList!: Item[];

  created (): void {
    this.renderList = this.allTodoList
  }

  @Watch('$route.params.status')
  routeUpdate (newValue: string): void {
    console.log('newValue', newValue)
    if (!newValue) {
      this.renderList = this.allTodoList
    } else if (newValue === 'active') {
      this.renderList = this.activeTodoList
    } else if (newValue === 'clear') {
      this.renderList = this.clearTodoList
    }
  }
}
</script>

<style scoped>

</style>
