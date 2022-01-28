<template>
  <div class="about">
    <Chidren1></Chidren1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import Chidren1 from '@/components/Chidren1.vue'

@Component({
  components: {
    Chidren1
  }
})
export default class About extends Vue {
  @Provide('message') msg = 'inject/provide';
}
</script>
