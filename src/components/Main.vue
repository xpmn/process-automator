<template>
  <div class="container-fluid">
    <div class="row at-row">
      <at-button type="primary" v-if="!showNew" v-on:click="showAdding">Add application</at-button>
      <at-button type="primary" v-if="showNew" v-on:click="showNew = false">Return</at-button>
      <div class="col-md-24 col-xs-24">
        <edit v-if="showNew" :create="true" :app="newApp" @done:edit="showNew = false"></edit>
      </div>
    </div>

    <div class="row at-row no-gutter">
      <div class="col-md-24 col-xs-24">
          <div v-for="app in list" class="app-item">
            {{app.name}}
            <at-button v-on:click="runApp">Run!</at-button>
            <edit v-if="app.edit" :app="app" @done:edit="app.edit = false"></edit>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Edit from './Edit'

export default {
  name: 'main',
  methods: {
    showAdding () {
      this.newApp = {
        name: '',
        type: 'IFTTT',
        trigger: '',
        value1: '',
        value2: '',
        value3: ''
      }
      this.showNew = true
    },
    ...mapActions({
      runApp: 'runApp'
    })
  },
  data: () => {
    return {
      newApp: {},
      showNew: false
    }
  },
  computed: {
    ...mapGetters({
      list: 'getApplications'
    })
  },
  components: { Edit }
}
</script>

<style scoped lang="scss">
.container-fluid {
  padding-top: 10px;
  max-width: 640px;
}
.app-item {

}
</style>
