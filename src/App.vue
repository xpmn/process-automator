<template>
  <div id="app">
    <at-menu mode="horizontal" active-Name="main" theme="dark">
      <at-menu-item name="main" >
        <div v-on:click="goTo('')"><i class="icon icon-home"></i>Main</div>
      </at-menu-item>
      <at-menu-item name="settings">
        <div v-on:click="goTo('settings')"><i class="icon icon-settings"></i>Settings</div>
      </at-menu-item>
    </at-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goTo (name) {
      this.$router.push('/' + name)
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
