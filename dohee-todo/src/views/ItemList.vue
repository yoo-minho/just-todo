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
    const status = this.$route.params.status as 'active' | 'clear'
    this.initRenderList(status)
  }

  initRenderList (status?: 'active' | 'clear'): void {
    if (!status) {
      this.renderList = this.allTodoList
    } else if (status === 'active') {
      this.renderList = this.activeTodoList
    } else if (status === 'clear') {
      this.renderList = this.clearTodoList
    }
  }

  @Watch('$route.params.status')
  routeUpdate (newValue?: 'active' | 'clear'): void {
    console.log('newValue', newValue)
    this.initRenderList(newValue)
  }

  @Watch('$store.state.todoList', { deep: true })
  routeUpdateByStateChange (): void {
    console.log('routeUpdateByStateChange', this.$store.state.todoList)
    const status = this.$route.params.status as 'active' | 'clear'
    this.initRenderList(status)
  }
}
</script>

<style scoped>

</style>
