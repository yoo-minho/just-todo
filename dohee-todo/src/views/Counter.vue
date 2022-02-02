<template>
  <div class="about">
    <counter-text></counter-text>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CounterText from '@/components/CounterText.vue'
import { Action } from 'vuex-class'

@Component({
  components: {
    CounterText
  }
})
export default class About extends Vue {
  @Action readonly increase!: void;
  @Action readonly decrease!: void;
}
</script>
