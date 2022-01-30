<template>
  <div>
    {{$store.getters.count}}
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator'

export default class CounterText extends Vue {

}
</script>

<style scoped>

</style>
