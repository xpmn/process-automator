<template>
  <div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-input v-model="name" placeholder="Name"></at-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-select v-model="type">
          <at-option value="IFTTT">IFTTT</at-option>
        </at-select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-input v-model="trigger" placeholder="Trigger Name"></at-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-xs-24">
        <at-input v-model="value1" placeholder="Value 1"></at-input>
      </div>
      <div class="col-md-8 col-xs-24">
        <at-input v-model="value2" placeholder="Value 2"></at-input>
      </div>
      <div class="col-md-8 col-xs-24">
        <at-input v-model="value3" placeholder="Value 3"></at-input>
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
