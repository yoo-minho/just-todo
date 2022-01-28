<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Message/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Message from '@/components/Message.vue'

@Component({
  components: {
    Message
  }
})
export default class Home extends Vue {
}
</script>
