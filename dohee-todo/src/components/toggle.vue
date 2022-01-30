<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Toggle extends Vue {
  show = false;
  toggle ():void {
    this.show = !this.show
  }
}
</script>
