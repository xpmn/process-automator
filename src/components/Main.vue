<template>
  <div>
    <div class="row at-row no-gutter">
      <at-button type="primary" v-on:click="showAdding">Add application</at-button>
    </div>
    <div class="row at-row no-gutter">
      <div class="col-md-24 col-xs-24">
          <div v-for="app in list">
            app.name
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  methods: {
    addApp () {
      // this.list = AppsService.apps
    }
  },
  computed: {
    ...mapGetters({
      list: 'getApplications'
    })
  }
}
</script>

</style>
