<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Children @counter="counter"></Children>
    <p>부모에서 숫자를 보여줍니다. {{ count }}</p>
    <Children :parent-message="message"></Children>
    <button @click="changeMessage">메시지를 바꿔줄게요</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Children from '@/components/Chidren.vue'

@Component({
  components: {
    Children
  }
})
export default class About extends Vue {
  count = 0;
  message = 'Hello';

  changeMessage (): void {
    this.message = 'change'
  }

  counter (): void {
    this.count++
  }
}
</script>
