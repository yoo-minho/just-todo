<template>
  <div class="about">
    <toggle-btn/>
    <dropdown/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import toggleBtn from '@/components/accordion.vue'
import dropdown from '@/components/dropdown.vue'

@Component({
  components: {
    dropdown,
    toggleBtn
  }
})
export default class About extends Vue {
}
</script>
