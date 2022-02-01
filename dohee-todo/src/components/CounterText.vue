<template>
  <div>메롱
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

export default class CounterText extends Vue {
  // count = 0
   @Getter('foo') readonly count!:number;

   mounted () {
     console.log('aaaaaa', this.count)
   }
}
</script>
