<template>
  <div id="app">
    <app-header></app-header>
    <item-input></item-input>
    <router-view></router-view>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link to="/router1">Router1</router-link> |-->
<!--      <router-link to="/router2">Router2</router-link> |-->
<!--      <router-link to="/mix-in">MixIn</router-link> |-->
<!--      <router-link to="/counter">Counter</router-link> |-->
<!--      <router-link to="/module-store">ModuleStore</router-link> |-->
<!--    </div>-->
<!--    <router-view/>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import appHeader from '@/components/Header.vue'
import itemInput from '@/components/ItemInput.vue'

@Component({
  components: {
    appHeader,
    itemInput
  }
})
export default class App extends Vue {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 100px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
