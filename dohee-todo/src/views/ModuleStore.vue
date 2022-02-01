<template>
  <div class="about">
    {{$store.state}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CounterText from '@/components/CounterText.vue'

@Component({
  components: {
    CounterText
  }
})
export default class About extends Vue {
  created ():void {
    // const moduleA = getModule(ModuleA, this.$store)
    // moduleA.setRootData2('minho')
    this.$store.dispatch('moduleA/setRootData2', 'minho')
  }
}
</script>
