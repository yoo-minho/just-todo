<template>
  <div class="about">
    {{$store.state}}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CounterText from '@/components/CounterText.vue'

@Component({
  components: {
    CounterText
  }
})
export default class About extends Vue {
  created ():void {
    console.log(this.$store)
    this.$store.dispatch('moduleA/setRootData', 'minho')
  }
}
</script>
