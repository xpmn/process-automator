<template>
  <div class="row at-row no-gutter">
    <div class="col-md-24 col-xs-24">
        <div v-for="app in list">
          app.name
        </div>
    </div>
  </div>
</template>

<script>
import AppsService from '@/services/apps'

export default {
  name: 'Main',
  data () {
    return {
      list: AppsService.apps
    }
  },
  methods: {
    addApp () {
      AppsService.addApp()
      // this.list = AppsService.apps
    }
  }
}
</script>

</style>
