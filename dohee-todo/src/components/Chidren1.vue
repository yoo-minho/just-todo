<template>
  <div>
    {{message}}
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

@Component
export default class Chidren extends Vue {
  @Inject() readonly message!: string;
}
</script>
