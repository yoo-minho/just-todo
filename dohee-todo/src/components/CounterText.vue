<template>
  <div>
    {{count}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class CounterText extends Vue {
   @Getter readonly count!:number;
}
</script>
