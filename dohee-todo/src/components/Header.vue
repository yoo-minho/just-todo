<template>
  <div>
    <h1>Todo List</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">All</router-link></li>
        <li class="breadcrumb-item"><router-link to="/active">Active</router-link></li>
        <li class="breadcrumb-item active" aria-current="page"><router-link to="/clear">Clear</router-link></li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}

</script>

<style scoped>

</style>
