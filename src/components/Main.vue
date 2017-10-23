<template>
  <div class="container-fluid">
    <div class="row at-row">
      <at-button type="primary" v-if="!showNew" v-on:click="showAdding">Add application</at-button>
      <at-button type="primary" v-if="showNew" v-on:click="showNew = false">Return</at-button>
      <div class="col-md-24 col-xs-24">
        <edit v-if="showNew" :create="true" :app="newApp" @created:app="showNew = false"></edit>
      </div>
    </div>

    <div class="row at-row no-gutter">
      <div class="col-md-24 col-xs-24">
          <div v-for="app in list">
            <at-button type="primary" v-on:click="showAdding">Add application</at-button>
            <edit v-if="app.edit" :app="app" @created:app="showNew = false"></edit>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Edit from './Edit'

export default {
  name: 'Main',
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
    }
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
</style>
