<template>
  <div>
    <p>
      {{ alertMessage }}
    </p>
    {{ parentMessage }}
    <button v-if="!parentMessage" @click="counter">자식에서 숫자를 1씩 올린다</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'

@Component
export default class Chidren extends Vue {
  @Prop() parentMessage?: string;
  alertMessage = '';

  @Watch('parentMessage')
  update (value: string, oldValue: string) :void{
    this.alertMessage = `메시지 변경쓰 ${oldValue} => ${value}`
  }

  @Emit()
  counter ():void {
    console.log('counter')
  }
}
</script>
