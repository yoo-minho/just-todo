<template>
  <div class="about">
    <MyCheckbox v-model="checked" @change="change"></MyCheckbox>
    {{text}}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MyCheckbox from '@/components/MyCheckbox.vue'

@Component({
  components: {
    MyCheckbox
  }
})
export default class About extends Vue {
  checked = false;
  text = '안동의';

  change (checked:boolean) : void {
    this.checked = checked
    this.text = checked ? '동의' : '안동의'
  }
}
</script>
